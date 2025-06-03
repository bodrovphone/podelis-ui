import { Formik, Field } from "formik";
import { useReducer, useEffect, useRef } from "react";
import Resizer from "react-image-file-resizer";
import { Images, ChevronDoubleRight } from "react-bootstrap-icons";
import ST from "./styles";
import axios from "axios";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

const ACTIONS = {
  ADD_IMAGE: "ADD_IMAGE",
  IMAGE_ERROR: "IMAGE_ERROR",
  IMAGE_WARNING: "IMAGE_WARNING",
  UPDATE_CITY: "UPDATE_CITY",
  FORM_SUBMITTED: "FORM_SUBMITTED",
  UPLOADING_IMAGES: "UPLOADING_IMAGES",
  IMAGES_UPLOADED: "IMAGES_UPLOADED",
};

const IMAGE_EXT = "png";

const reducer = (state: any, { type, payload }: { type: string; payload?: any }): any => {
  if (type === ACTIONS.ADD_IMAGE) {
    // slice(-3) limits the number of images up to 4
    // filter() gets rid of duplicates
    return {
      ...state,
      images: [
        ...state.images.filter((img) => img !== payload).slice(-3),
        payload,
      ],
      // I need redo this when having imageDeletion feature
      imagesCounter: state.images.length > 4 ? 4 : state.images.length + 1,
    };
  }
  if (type === ACTIONS.IMAGE_ERROR) {
    return {
      ...state,
      error: payload,
    };
  }
  if (type === ACTIONS.IMAGE_WARNING) {
    return {
      ...state,
      warning: payload,
    };
  }
  if (type === ACTIONS.UPDATE_CITY) {
    return {
      ...state,
      city: payload,
    };
  }
  if (type === ACTIONS.FORM_SUBMITTED) {
    return {
      ...state,
      submitted: true,
    };
  }
  if (type === ACTIONS.UPLOADING_IMAGES) {
    return {
      ...state,
      uploading_images: true,
    };
  }
  if (type === ACTIONS.IMAGES_UPLOADED) {
    return {
      ...state,
      uploading_images: false,
    };
  }
  return state;
};

const Form = (props: any) => {
  // later on you would want to provide city as the default value from user personal data (a potential useMemo use?)
  const imagesId = useRef(uuidv4());

  const [state, dispatch] = useReducer(reducer, {
    images: [],
    error: "",
    warning: "",
    city: "",
    submitted: false,
    imagesCounter: 0,
    uploading_images: false,
  });

  const {
    images,
    error,
    warning,
    city,
    submitted,
    imagesCounter,
    uploading_images,
  } = state;

  const router = useRouter();

  // hopefully uuid will really be unique, otherwise I am in trouble here...
  useEffect(() => {
    const uploadImages = async () => {
      if (images.length) {
        dispatch({ type: ACTIONS.UPLOADING_IMAGES });
        const postImagesPromises = images.map((image: any, index: number) => // Added types for image and index
          axios.post("/api/postImage", {
            image,
            id: imagesId.current,
            index,
          })
        );
        try {
          await Promise.allSettled([...postImagesPromises]);
          dispatch({ type: ACTIONS.IMAGES_UPLOADED });
        } catch (error: any) {
          console.error("Error uploading images:", error);
        }
      }
    };

    uploadImages();
  }, [imagesCounter, images, dispatch]); // Added images and dispatch

  const resizeFile = (file: any): Promise<any> =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        450,
        450,
        IMAGE_EXT.toUpperCase(),
        100,
        0,
        (uri: any) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const handleImageChange = (e: any) => {
    e.preventDefault();

    // https://stackoverflow.com/questions/13975031/reading-multiple-files-with-javascript-filereader-api-one-at-a-time

    const files: FileList | null = e.currentTarget.files;

    if (files && files.length > 4) {
      dispatch({
        type: ACTIONS.IMAGE_ERROR,
        payload: "Лимит фото - 4 штук",
      });
    }

    // Resizing image and filling state

    if (files) {
      Object.keys(files).forEach(async (i: any) => {
        const file = files[i];
        const reader = new FileReader();
        const image: any = await resizeFile(file);
        reader.onloadend = () => {
          if (images.length > 4) {
            dispatch({
              type: ACTIONS.IMAGE_WARNING,
              payload: "Удаляю избыток фото...",
            });
          }
          dispatch({ type: ACTIONS.ADD_IMAGE, payload: image });
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const citySelectHandler = ({ formatted_address }: { formatted_address: string }) => {
    const cityFromAddress = formatted_address?.substring(
      0,
      formatted_address.indexOf(",")
    );
    cityFromAddress &&
      dispatch({ type: "UPDATE_CITY", payload: cityFromAddress });
  };

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        price: "",
        period: 1,
        units: true,
        conditions: [],
        deposit: "",
        pledge: "",
      }}
      validate={(values: any) => {
        const errors: any = {};
        if (!values.title) {
          errors.title = "Обязательно для заполнения";
        }
        // obviously I can do that check dynamic
        if (!values.description) {
          errors.description = "Обязательно для заполнения";
        }
        return errors;
      }}
      onSubmit={async (values: any) => {
        // from states : images , city
        const response: any = await axios.post("/api/postProkat", {
          ...values,
          deposit: +values.deposit,
          imagesId: imagesId.current,
          imagesCounter,
          imgExt: IMAGE_EXT,
          city: city,
          dateCreated: new Date().toISOString().split("T")[0],
        });

        if (response.status === 200) {
          dispatch({ type: ACTIONS.FORM_SUBMITTED });
          router.push(`/prokat/${response.data}`);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => {
        return isSubmitting || submitted ? (
          <span>Отправляю данные...</span>
        ) : (
          <ST.Form onSubmit={handleSubmit} {...props}>
            <ST.Label>
              <ST.ButtonPhoto>
                фото
                <Images size="24" color="black" />
              </ST.ButtonPhoto>
              <input
                type="file"
                name="photo"
                multiple
                onChange={handleImageChange}
                accept="image/*"
              />
            </ST.Label>
            <ST.PeriodWrapper>
              {images?.map((preview: any, i: number) => (
                <ST.AdPreview key={i} src={preview} />
              ))}
            </ST.PeriodWrapper>
            <ST.Label>
              Название
              {touched.title && errors.title && <ST.ErrorDisplay>{String(errors.title)}</ST.ErrorDisplay>}
              <ST.Input
                type="text"
                placeholder="Буровая установка"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
            </ST.Label>
            <ST.Label>
              Описание
              {/* Assuming similar error display might be needed for description */}
              {touched.description && errors.description && <ST.ErrorDisplay>{String(errors.description)}</ST.ErrorDisplay>}
              <ST.TextArea
                placeholder="Буровая установка"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
            </ST.Label>
            <ST.Label>
              Город
              <ST.Location
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                onPlaceSelected={citySelectHandler}
                defaultValue={city}
                language="ru"
                // Removed onChange that was updating city based on raw input
              />
            </ST.Label>
            <ST.Label>
              Цена
              <ST.Input
                type="number"
                name="price"
                placeholder="0"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
            </ST.Label>
            <ST.PeriodWrapper>
              <ST.LabelPeriod>
                Период
                <ST.InputPeriod
                  type="number"
                  name="period"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.period}
                />
                <ST.InputRange
                  type="range"
                  min="1"
                  max={values.units ? "30" : "24"}
                  name="period"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.period}
                />
              </ST.LabelPeriod>
              <ST.CheckboxWrapper>
                {values.units ? "дни" : "часы"}
                <ST.CheckBoxLabel>
                  <input
                    type="checkbox"
                    name="units"
                    onChange={handleChange}
                    checked={values.units}
                  />
                  <span />
                </ST.CheckBoxLabel>
              </ST.CheckboxWrapper>
            </ST.PeriodWrapper>

            <ST.ConditionsLabel>
              <ST.CheckBoxLabel color="#05668d">
                <Field type="checkbox" name="conditions" value="deposit" />
                <span />
                Залог
              </ST.CheckBoxLabel>

              <ST.CheckBoxLabel color="#f7d6e0">
                <Field type="checkbox" name="conditions" value="terms" />
                <span />
                Договор
              </ST.CheckBoxLabel>
              <ST.CheckBoxLabel color="#faf3dd">
                <Field type="checkbox" name="conditions" value="pledge" />
                <span />
                Другое
              </ST.CheckBoxLabel>
            </ST.ConditionsLabel>
            {values.conditions.includes("deposit") && (
              <ST.Label>
                Залог (грн)
                <ST.Input
                  type="number"
                  name="deposit"
                  placeholder="укажите сумму залога"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.deposit}
                />
              </ST.Label>
            )}
            {values.conditions.includes("pledge") && (
              <ST.Label>
                Укажите ваши условия
                <ST.Input
                  type="text"
                  name="pledge"
                  placeholder="например: водительские права"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pledge}
                />
              </ST.Label>
            )}
            <ST.ButtonSubmit
              type="submit"
              disabled={isSubmitting || uploading_images}
            >
              Отправить
              <ChevronDoubleRight size={16} color="black" />
            </ST.ButtonSubmit>
          </ST.Form>
        );
      }}
    </Formik>
  );
};

export default Form;
