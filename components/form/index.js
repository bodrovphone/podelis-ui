import { Formik } from "formik";
import { useState } from "react";
import Resizer from "react-image-file-resizer";
import { Images, ChevronDoubleRight } from "react-bootstrap-icons";
import {
  Form_ST,
  Input_ST,
  Label_ST,
  TextArea_ST,
  PeriodWrapper_ST,
  CheckboxWrapper_ST,
  LabelPeriod_ST,
  InputPeriod_ST,
  CheckBoxLabel_ST,
  InputRange_ST,
  AdPreview_ST,
  ButtonPhoto_ST,
  ButtonSubmit_ST,
} from "./styles";

const Form = (props) => {
  const [state, setState] = useState({
    files: [],
    imagePreviewUrls: [],
    error: "",
  });

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });
  const handleImageChange = (e) => {
    e.preventDefault();

    // https://stackoverflow.com/questions/13975031/reading-multiple-files-with-javascript-filereader-api-one-at-a-time

    const files = e.currentTarget.files;
    Object.keys(files).forEach(async (i) => {
      const file = files[i];
      const reader = new FileReader();
      // Resizing image and filling state
      const image = await resizeFile(file);
      reader.onloadend = (e) => {
        setState((prevState) => {
          let error;
          if (prevState.files.length > 9) {
            prevState.files.length = 9;
            prevState.imagePreviewUrls.length = 9;
            error = "Загрузить можно до 10 фотографий";
          }
          return {
            files: [...prevState.files, image],
            imagePreviewUrls: [...prevState.imagePreviewUrls, image],
            error,
          };
        });

        // I will want to push the image to cloudFront through RestFul API request somewhere in this place
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        price: "",
        period: 1,
        units: true,
      }}
      validate={(values) => {
        const errors = {};
        // if (!values.email) {
        //   errors.email = "Required";
        // } else if (
        //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //   errors.email = "Invalid email address";
        // }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
        /* and other goodies */
      }) => (
        <Form_ST onSubmit={handleSubmit}>
          <Label_ST>
            Название
            <Input_ST
              type="text"
              placeholder="Буровая установка"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
          </Label_ST>
          <Label_ST>
            Описание
            <TextArea_ST
              type="text"
              placeholder="Буровая установка"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
          </Label_ST>
          <Label_ST>
            Цена
            <Input_ST
              type="number"
              name="price"
              placeholder="0"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
          </Label_ST>
          <PeriodWrapper_ST>
            <LabelPeriod_ST>
              Период
              <InputPeriod_ST
                type="number"
                name="period"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.period}
              />
              <InputRange_ST
                type="range"
                min="1"
                max={values.units ? "30" : "24"}
                name="period"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.period}
              />
            </LabelPeriod_ST>
            <CheckboxWrapper_ST>
              {values.units ? "дни" : "часы"}
              <CheckBoxLabel_ST>
                <input
                  type="checkbox"
                  name="units"
                  onChange={handleChange}
                  checked={values.units}
                />
                <span />
              </CheckBoxLabel_ST>
            </CheckboxWrapper_ST>
          </PeriodWrapper_ST>
          <Label_ST>
            <ButtonPhoto_ST>
              Добавить фото
              <Images size={16} color="black" />
            </ButtonPhoto_ST>
            <input
              type="file"
              name="photo"
              multiple
              onChange={handleImageChange}
            />
          </Label_ST>
          {state.error}
          <PeriodWrapper_ST>
            {state.imagePreviewUrls &&
              state.imagePreviewUrls.map((preview, i) => (
                <AdPreview_ST key={i} src={preview} />
              ))}
          </PeriodWrapper_ST>
          {errors.title && touched.title && errors.title}
          <ButtonSubmit_ST type="submit" disabled={isSubmitting}>
            Отправить
            <ChevronDoubleRight size={16} color="black" />
          </ButtonSubmit_ST>
        </Form_ST>
      )}
    </Formik>
  );
};

export default Form;
