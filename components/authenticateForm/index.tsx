import React, { useState } from "react";
import { Formik } from "formik";
import LT from "../layouts";

const AuthenticateForm = (props: any) => {
  // const [state, setState] = useState({
  //   signUp: true,
  //   userName: "",
  //   imagePreviewUrls: [],
  //   error: "",
  // });

  const handleError = (touched: any, err: any) => {
    return touched && err ? <span className="text-[#ffa9b5]">{err}</span> : "";
  };

  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        password: "",
        agreedTerms: false,
      }}
      validate={(values: any) => {
        const errors: any = {};
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
      onSubmit={(values: any, { setSubmitting }: {setSubmitting: any}) => {
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
        <form onSubmit={handleSubmit} className="w-full h-screen">
          <div className="w-[90%] mx-auto">
            <div className="w-[70%] flex justify-around sm:flex-col">
              <LT.Button type="button" className="mr-10 sm:mt-2.5 sm:mx-0 lg:w-[40%] lg:my-2.5 lg:mx-auto">
                <span className="flex justify-center items-center">
                  <img src="../img/FB-big-logo.png" alt="Facebook" className="max-w-[25px] h-auto mr-[5px]" />
                  Вход с Facebook
                  <i className="relative top-1">&gt;&gt;</i>
                </span>
              </LT.Button>

              <LT.Button type="button" className="mr-10 sm:mt-2.5 sm:mx-0 lg:w-[40%] lg:my-2.5 lg:mx-auto">
                <span className="flex justify-center items-center">
                  <img src="../img/G-big-logo.png" alt="Google" className="max-w-[25px] h-auto mr-[5px]" />
                  Вход с Google
                  <i className="relative top-1">&gt;&gt;</i>
                </span>
              </LT.Button>
            </div>
          </div>
          <label className="flex flex-col my-5 mx-auto w-[90%]">
            Имя
            {handleError(touched.userName, errors.userName)}
            <input
              type="text"
              placeholder="Павел Мороз"
              name="userName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.userName}
              className="w-[70%] outline-none py-[5px] px-[7px] rounded-bl-[10px] rounded-tr-[10px] border-2 border-lemonchiffon h-[35px] shadow-logoHeader appearance-none bg-wellDone text-center font-['podelis-font'] text-base placeholder:text-center focus:bg-lemonchiffon focus:border-mediumWell focus:placeholder:text-transparent"
            />
          </label>
          <label className="flex flex-col my-5 mx-auto w-[90%]">
            Email
            {handleError(touched.email, errors.email)}
            <input
              type="email"
              placeholder="my_name@gmail.com"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="w-[70%] outline-none py-[5px] px-[7px] rounded-bl-[10px] rounded-tr-[10px] border-2 border-lemonchiffon h-[35px] shadow-logoHeader appearance-none bg-wellDone text-center font-['podelis-font'] text-base placeholder:text-center focus:bg-lemonchiffon focus:border-mediumWell focus:placeholder:text-transparent"
            />
          </label>
          <label className="flex flex-col my-5 mx-auto w-[90%]">
            Пароль
            {handleError(touched.password, errors.password)}
            <input
              type="password"
              name="password"
              placeholder="***********"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className="w-[70%] outline-none py-[5px] px-[7px] rounded-bl-[10px] rounded-tr-[10px] border-2 border-lemonchiffon h-[35px] shadow-logoHeader appearance-none bg-wellDone text-center font-['podelis-font'] text-base placeholder:text-center focus:bg-lemonchiffon focus:border-mediumWell focus:placeholder:text-transparent"
            />
          </label>
          <div className="w-[90%] my-2.5 mx-auto flex flex-col">
            <label className="text-[0.7em] flex flex-col w-[70%] items-center mb-[15px] font-bold">
              {handleError(touched.agreedTerms, errors.agreedTerms)}
              <span className="self-end">
                <input
                  name="agreedTerms"
                  checked={values.agreedTerms}
                  onChange={handleChange}
                  type="checkbox"
                  className=""
                />
                Я соглашаюсь с &nbsp;
              </span>
              <a href={process.env.NEXT_PUBLIC_TERMS_URL} target="_blank">
                &#171;Правилами web сервиса&#187;.
              </a>
            </label>
            <div className="flex w-[70%] justify-end">
              <LT.Button type="submit" disabled={isSubmitting}>
                <span>
                  Регистрация/Вход
                  <i>&gt;&gt;</i>
                </span>
              </LT.Button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default AuthenticateForm;
