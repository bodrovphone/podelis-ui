import { Formik, Form } from "formik";

import ST from "./styles";

import LT from "../layouts";

const Settings = (props: any) => {
  return (
    <Formik
      initialValues={{
        notify: "Notify",
        tel: "public",
      }}
      // validate={(values: any) => {
      //   const errors: any = {};
      //   // if (!values.email) {
      //   //   errors.email = "Required";
      //   // } else if (
      //   //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   // ) {
      //   //   errors.email = "Invalid email address";
      //   // }
      //   return errors;
      // }}
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
        <Form onSubmit={handleSubmit}>
          <ST.SettingWrapper>
            <ST.Group>
              <ST.SettingTitle>Уведомления по email</ST.SettingTitle>
              <ST.Label>
                Частые
                <ST.Radio type="radio" name="notify" value="Notify" />
                <ST.CheckMark />
              </ST.Label>
              <ST.Label>
                Изредка
                <ST.Radio type="radio" name="notify" value="Notify-Rare" />
                <ST.CheckMark />
              </ST.Label>
              <ST.Label>
                Никогда
                <ST.Radio type="radio" name="notify" value="Notify-None" />
                <ST.CheckMark />
              </ST.Label>
            </ST.Group>

            <ST.Group>
              <ST.SettingTitle>Номер телефона</ST.SettingTitle>
              <ST.Label>
                Показывать
                <ST.Radio type="radio" name="tel" value="public" />
                <ST.CheckMark />
              </ST.Label>
              <ST.Label>
                Скрывать
                <ST.Radio type="radio" name="tel" value="private" />
                <ST.CheckMark />
              </ST.Label>
            </ST.Group>

            <ST.SaveWrapper>
              <LT.Button type="button">
                <span>
                  Сохранить
                  <i>&gt;&gt;</i>
                </span>
              </LT.Button>
            </ST.SaveWrapper>

            <ST.Group>
              <ST.SettingTitle>Сбросить пароль</ST.SettingTitle>
              <ST.ButtonSetting type="button">Сброс пароля</ST.ButtonSetting>
            </ST.Group>

            <ST.Group>
              <ST.SettingTitle>Удалить акаунт</ST.SettingTitle>
              <ST.ButtonSetting type="button" delete>
                Удалить акаунт
              </ST.ButtonSetting>
            </ST.Group>
          </ST.SettingWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default Settings;
