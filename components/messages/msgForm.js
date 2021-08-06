import { useRef, useEffect } from "react";
import { Formik } from "formik";
import { useState } from "react";
import Resizer from "react-image-file-resizer";
import { Images, ChevronDoubleRight } from "react-bootstrap-icons";

import ST from "./styles";

const Form = (props) => {
  const [state, setState] = useState({
    files: [],
    imagePreviewUrls: [],
    error: "",
  });

  const msgTextRef = useRef(null);

  useEffect(() => {
    if (msgTextRef.current) {
      msgTextRef.current.scrollIntoView();
    }
  }, []);

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
        <ST.Form onSubmit={handleSubmit}>
          <ST.FormWrapper>
            <ST.MsgInput
              type="text"
              placeholder="Буровая установка"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              ref={msgTextRef}
            />

            <ST.FormButtonsWrapper>
              <ST.Label>
                <ST.ButtonPhoto>
                  <Images size={16} color="black" />
                </ST.ButtonPhoto>
                <input
                  type="file"
                  name="photo"
                  multiple
                  onChange={handleImageChange}
                />
              </ST.Label>
              <ST.ButtonSubmit type="submit" disabled={isSubmitting}>
                Отправить
                <ChevronDoubleRight size={16} color="black" />
              </ST.ButtonSubmit>
            </ST.FormButtonsWrapper>
          </ST.FormWrapper>
          {state.error}
          <ST.PeriodWrapper>
            {state.imagePreviewUrls?.map((preview, i) => (
              <ST.AdPreview key={i} src={preview} />
            ))}
          </ST.PeriodWrapper>
          {errors.title && touched.title && errors.title}
        </ST.Form>
      )}
    </Formik>
  );
};

export default Form;
