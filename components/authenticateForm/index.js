import React, { useState } from "react";
import { Formik } from "formik";
import LT from "../layouts";

import ST from "./styles";

const AuthenticateForm = (props) => {
  // const [state, setState] = useState({
  //   signUp: true,
  //   userName: "",
  //   imagePreviewUrls: [],
  //   error: "",
  // });

  const handleError = (touched, err) => {
    return touched && err ? <ST.Error>{err}</ST.Error> : "";
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
        <ST.Form onSubmit={handleSubmit}>
          <ST.SocialWrapper>
            <div>
              <LT.Button type="button">
                <span>
                  <ST.Img src="../img/FB-big-logo.png" />
                  Вход с Facebook
                  <i>&gt;&gt;</i>
                </span>
              </LT.Button>

              <LT.Button type="button">
                <span>
                  <ST.Img src="../img/G-big-logo.png" />
                  Вход с Google
                  <i>&gt;&gt;</i>
                </span>
              </LT.Button>
            </div>
          </ST.SocialWrapper>
          <ST.Label>
            Имя
            {handleError(touched.userName, errors.userName)}
            <ST.Input
              type="text"
              placeholder="Павел Мороз"
              name="userName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userName}
            />
          </ST.Label>
          <ST.Label>
            Email
            {handleError(touched.email, errors.email)}
            <ST.Input
              type="email"
              placeholder="my_name@gmail.com"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </ST.Label>
          <ST.Label>
            Пароль
            {handleError(touched.password, errors.password)}
            <ST.Input
              type="password"
              name="password"
              placeholder="***********"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </ST.Label>
          <ST.SubmitWrapper>
            <ST.CheckboxLabel>
              {handleError(touched.agreedTerms, errors.agreedTerms)}
              <span>
                <ST.Checkbox
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
            </ST.CheckboxLabel>
            <div>
              <LT.Button type="submit" disabled={isSubmitting}>
                <span>
                  Регистрация/Вход
                  <i>&gt;&gt;</i>
                </span>
              </LT.Button>
            </div>
          </ST.SubmitWrapper>
        </ST.Form>
      )}
    </Formik>
  );
};

export default AuthenticateForm;
