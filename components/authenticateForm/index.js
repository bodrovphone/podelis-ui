import React, { useState } from "react";
import { Formik } from "formik";
import { Button } from "../layouts/";

import {
  Form_ST,
  Label_ST,
  Input_ST,
  SocialWrapper_ST,
  SubmitWrapper_ST,
  Img_ST,
  CheckboxLabel_ST,
  Checkbox_ST,
  Error_ST,
} from "./styles";

const AuthenticateForm = (props) => {
  // const [state, setState] = useState({
  //   signUp: true,
  //   userName: "",
  //   imagePreviewUrls: [],
  //   error: "",
  // });

  const handleError = (touched, err) => {
    return touched && err ? <Error_ST>{err}</Error_ST> : "";
  };

  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        password: "",
        agreedTerms: false,
      }}
      validate={(values) => {
        const errors = {};
        if (!values.userName) {
          errors.userName = "Гани имя свое сука)";
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = "Invalid email address";
        }
        if (values.password.length < 6) {
          errors.password = "Пароль не менее 6 символов";
        }
        if (!values.agreedTerms) {
          errors.agreedTerms = "обяз";
        }
        console.log("errors like : ", errors);
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
          <SocialWrapper_ST>
            <div>
              <Button type="button">
                <span>
                  <Img_ST src="../img/FB-big-logo.png" />
                  Вход с Facebook
                  <i>&gt;&gt;</i>
                </span>
              </Button>

              <Button type="button">
                <span>
                  <Img_ST src="../img/G-big-logo.png" />
                  Вход с Google
                  <i>&gt;&gt;</i>
                </span>
              </Button>
            </div>
          </SocialWrapper_ST>
          <Label_ST>
            Имя
            {handleError(touched.userName, errors.userName)}
            <Input_ST
              type="text"
              placeholder="Павел Мороз"
              name="userName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userName}
            />
          </Label_ST>
          <Label_ST>
            Email
            {handleError(touched.email, errors.email)}
            <Input_ST
              type="email"
              placeholder="my_name@gmail.com"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </Label_ST>
          <Label_ST>
            Пароль
            {handleError(touched.password, errors.password)}
            <Input_ST
              type="password"
              name="password"
              placeholder="***********"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </Label_ST>
          <SubmitWrapper_ST>
            <CheckboxLabel_ST>
              {handleError(touched.agreedTerms, errors.agreedTerms)}
              <span>
                <Checkbox_ST
                  name="agreedTerms"
                  checked={values.agreedTerms}
                  onChange={handleChange}
                  type="checkbox"
                />
                Я соглашаюсь с &nbsp;
              </span>
              <a href={process.env.NEXT_PUBLIC_TERMS_URL} target="_blank">
                &#171;Правилами web сервиса&#187;.
              </a>
            </CheckboxLabel_ST>
            <div>
              <Button type="submit" disabled={isSubmitting}>
                <span>
                  Регистрация
                  <i>&gt;&gt;</i>
                </span>
              </Button>
            </div>
          </SubmitWrapper_ST>
        </Form_ST>
      )}
    </Formik>
  );
};

export default AuthenticateForm;
