import { Formik, Field } from "formik";
import { useReducer, useEffect, useRef } from "react";
import Resizer from "react-image-file-resizer";
import { Images, ChevronDoubleRight } from "react-bootstrap-icons";
import Autocomplete from "react-google-autocomplete"; // Assuming ST.Location was this
import axios from "axios";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

const baseInputStyles = "w-[70%] outline-none py-[5px] px-[7px] rounded-br-lg rounded-tl-lg border-2 border-formInputBorder h-[35px] shadow-logoHeader appearance-none bg-formInputBg text-center font-['podelis-font'] text-base placeholder:text-center focus:bg-formInputBorder focus:border-formInputFocusBorder focus:placeholder:text-transparent";

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
          <form onSubmit={handleSubmit} {...props} className="w-full">
            <label className="flex flex-col my-5 mx-auto w-11/12">
              <span className="appearance-none text-center py-[5px] px-[7px] border-2 border-gray-400 font-['podelis-font'] text-base w-1/5 h-[35px] shadow-logoHeader bg-formInputBg rounded-br-lg rounded-tl-lg flex items-center justify-around hover:shadow-md cursor-pointer">
                фото
                <Images size="24" color="black" />
              </span>
              <input
                type="file"
                name="photo"
                multiple
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
            </label>
            <div className="w-11/12 mx-auto flex items-baseline flex-wrap"> {/* ST.PeriodWrapper for images */}
              {images?.map((preview: any, i: number) => (
                <img key={i} src={preview} className="w-3/10 max-w-[200px] max-h-[400px] m-1.5" alt={`preview ${i}`} />
              ))}
            </div>
            <label className="flex flex-col my-5 mx-auto w-11/12">
              Название
              {touched.title && errors.title && <span className="text-red-500 text-xs mt-1 block">{String(errors.title)}</span>}
              <input
                type="text"
                placeholder="Буровая установка"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                className={baseInputStyles}
              />
            </label>
            <label className="flex flex-col my-5 mx-auto w-11/12">
              Описание
              {touched.description && errors.description && <span className="text-red-500 text-xs mt-1 block">{String(errors.description)}</span>}
              <textarea
                placeholder="Буровая установка"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                className={`${baseInputStyles} h-[150px]`}
              />
            </label>
            <label className="flex flex-col my-5 mx-auto w-11/12">
              Город
              <Autocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                onPlaceSelected={citySelectHandler}
                defaultValue={city}
                language="ru"
                className={baseInputStyles}
                options={{ types: ["(cities)"] }}
              />
            </label>
            <label className="flex flex-col my-5 mx-auto w-11/12">
              Цена
              <input
                type="number"
                name="price"
                placeholder="0"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
                className={baseInputStyles}
              />
            </label>
            <div className="w-11/12 mx-auto flex items-baseline flex-wrap"> {/* ST.PeriodWrapper */}
              <label className="flex flex-col my-2.5 w-1/2"> {/* ST.LabelPeriod */}
                Период
                <input
                  type="number"
                  name="period"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.period}
                  className={`${baseInputStyles} w-[90%]`} // InputPeriod specific width
                />
                <input
                  type="range"
                  min="1"
                  max={values.units ? "30" : "24"}
                  name="period"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.period}
                  className="w-11/12 my-5 mb-1" // ST.InputRange styles
                />
              </label>
              <div className="w-1/5 flex flex-col items-center"> {/* ST.CheckboxWrapper */}
                {values.units ? "дни" : "часы"}
                <label className="relative inline-block w-[43px] h-[22px] m-1.5">
                  <input
                    type="checkbox"
                    name="units"
                    onChange={handleChange}
                    checked={values.units}
                    className="peer opacity-0 w-0 h-0"
                  />
                  <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition duration-400 rounded-[22px] peer-focus:ring-1 peer-focus:ring-blue-500 peer-checked:bg-blue-500 before:absolute before:content-[''] before:h-4 before:w-4 before:left-1 before:bottom-[3px] before:bg-white before:transition before:duration-400 before:rounded-full peer-checked:before:translate-x-4"></span>
                </label>
              </div>
            </div>

            <div className="flex mx-auto gap-5 w-11/12"> {/* ST.ConditionsLabel */}
              <label className="relative inline-block w-[43px] h-[22px] m-1.5">
                <Field type="checkbox" name="conditions" value="deposit" className="peer opacity-0 w-0 h-0" />
                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition duration-400 rounded-[22px] peer-focus:ring-1 peer-focus:ring-tyRareMedium peer-checked:bg-tyRareMedium before:absolute before:content-[''] before:h-4 before:w-4 before:left-1 before:bottom-[3px] before:bg-white before:transition before:duration-400 before:rounded-full peer-checked:before:translate-x-4"></span>
                Залог
              </label>

              <label className="relative inline-block w-[43px] h-[22px] m-1.5">
                <Field type="checkbox" name="conditions" value="terms" className="peer opacity-0 w-0 h-0" />
                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition duration-400 rounded-[22px] peer-focus:ring-1 peer-focus:ring-tyMediumWell peer-checked:bg-tyMediumWell before:absolute before:content-[''] before:h-4 before:w-4 before:left-1 before:bottom-[3px] before:bg-white before:transition before:duration-400 before:rounded-full peer-checked:before:translate-x-4"></span>
                Договор
              </label>
              <label className="relative inline-block w-[43px] h-[22px] m-1.5">
                <Field type="checkbox" name="conditions" value="pledge" className="peer opacity-0 w-0 h-0" />
                <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition duration-400 rounded-[22px] peer-focus:ring-1 peer-focus:ring-tyWellDone peer-checked:bg-tyWellDone before:absolute before:content-[''] before:h-4 before:w-4 before:left-1 before:bottom-[3px] before:bg-white before:transition before:duration-400 before:rounded-full peer-checked:before:translate-x-4"></span>
                Другое
              </label>
            </div>
            {values.conditions.includes("deposit") && (
              <label className="flex flex-col my-5 mx-auto w-11/12">
                Залог (грн)
                <input
                  type="number"
                  name="deposit"
                  placeholder="укажите сумму залога"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.deposit}
                  className={baseInputStyles}
                />
              </label>
            )}
            {values.conditions.includes("pledge") && (
              <label className="flex flex-col my-5 mx-auto w-11/12">
                Укажите ваши условия
                <input
                  type="text"
                  name="pledge"
                  placeholder="например: водительские права"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pledge}
                  className={baseInputStyles}
                />
              </label>
            )}
            <button
              type="submit"
              disabled={isSubmitting || uploading_images}
              className="appearance-none text-center py-[5px] px-[7px] font-['podelis-font'] text-base min-w-[18%] h-[35px] rounded-br-lg rounded-tl-lg border-2 bg-formInputBorder border-formInputFocusBorder shadow-logoHeader flex items-center justify-around ml-[50%] mt-5 hover:shadow-md"
            >
              Отправить
              <ChevronDoubleRight size={16} color="black" />
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default Form;
