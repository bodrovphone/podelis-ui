import { useRef, useEffect } from "react";
import { Formik } from "formik";
import { useState } from "react";
import Resizer from "react-image-file-resizer";
import { Images, ChevronDoubleRight } from "react-bootstrap-icons";

import ST from "./styles";

interface FormState {
  files: any[];
  imagePreviewUrls: any[];
  error: string;
}

const Form = (props: any) => {
  const [state, setState] = useState<FormState>({
    files: [],
    imagePreviewUrls: [],
    error: "",
  });

  const msgTextRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (msgTextRef.current) {
      msgTextRef.current.scrollIntoView();
    }
  }, []);

  const resizeFile = (file: File): Promise<any> =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        100,
        0,
        (uri: any) => {
          resolve(uri);
        },
        "base64"
      );
    });
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    // https://stackoverflow.com/questions/13975031/reading-multiple-files-with-javascript-filereader-api-one-at-a-time

    const files = e.currentTarget.files;
    if (files) {
      Object.keys(files).forEach(async (i: any) => {
        const file = files[i];
        const reader = new FileReader();
        // Resizing image and filling state
        const image = await resizeFile(file);
        reader.onloadend = (e: any) => {
          setState((prevState: FormState) => {
            let error = prevState.error;
            const currentFiles = [...prevState.files];
            const currentImagePreviewUrls = [...prevState.imagePreviewUrls];

            if (currentFiles.length >= 9) { // Check before adding new one, and ensure it's <10 (so 9 is max before this add)
              error = "Загрузить можно до 10 фотографий";
              // Do not add more if limit is reached or exceeded
              return { ...prevState, error };
            }

            return {
              files: [...currentFiles, image],
              imagePreviewUrls: [...currentImagePreviewUrls, image],
              error, // Reset error if successfully added and within limit or keep existing error
            };
          });

          // I will want to push the image to cloudFront through RestFul API request somewhere in this place
        };
        reader.readAsDataURL(file);
      });
    }
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
      validate={(values: any) => {
        const errors: any = {};
        // if (!values.email) {
        //   errors.email = "Required";
        // } else if (
        //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        // ) {
        //   errors.email = "Invalid email address";
        // }
        return errors;
      }}
      onSubmit={(values: any, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
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
                  accept="image/*" // Good practice to add accept attribute
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
            {state.imagePreviewUrls?.map((preview: any, i: number) => (
              <ST.AdPreview key={i} src={preview} />
            ))}
          </ST.PeriodWrapper>
          {errors.title && touched.title && <ST.ErrorDisplay>{String(errors.title)}</ST.ErrorDisplay>}
        </ST.Form>
      )}
    </Formik>
  );
};

export default Form;
