import { Formik } from "formik";
import { useState } from "react";
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
} from "./styles";

const Form = (props) => {
  const [state, setState] = useState({});

  const handleImageChange = (e) => {
    e.preventDefault();

    // https://stackoverflow.com/questions/13975031/reading-multiple-files-with-javascript-filereader-api-one-at-a-time
    let reader = new FileReader();
    let file = e.target.files[0];

    const files = e.currentTarget.files;
    Object.keys(files).forEach(i => {
      const file = files[i];
      const reader = new FileReader();
      reader.onloadend = (e) => {
        console.log('reader thing', e);
        const stateFiles = state.files || [];
        stateFiles.push(file);
        const statePreviews = state.imagePreviewUrls || [];
        statePreviews.push(reader.result);
        setState({
          file: stateFiles,
          imagePreviewUrls: statePreviews
        });
      }
      reader.readAsBinaryString(file, 'utf8');
      // reader.readAsDataURL(file);
    })

    // reader.onloadend = () => {
    //   setState({
    //     file: file,
    //     imagePreviewUrl: reader.result
    //   });
    // };

    // reader.readAsDataURL(file);
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
            Фотка
            <input
              type="file"
              name="photo"
              multiple
              onChange={handleImageChange}
            />
            {
            state.imagePreviewUrls && state.imagePreviewUrls.map(preview => (<img src={preview} />))
    }
          </Label_ST>
          {errors.title && touched.title && errors.title}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form_ST>
      )}
    </Formik>
  );
};

export default Form;
