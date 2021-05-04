import { Formik, Form } from "formik";

import {
  Radio_ST,
  Label_ST,
  SettingWrapper_ST,
  SettingTitle_ST,
  Group_ST,
  CheckMark_ST,
  ButtonSetting_ST,
  SaveWrapper_ST,
} from "./styles";

import { Button_ST } from "../loadMore/styles";

const Settings = (props) => {
  return (
    <Formik
      initialValues={{
        notify: "Notify",
        tel: "public",
      }}
      // validate={(values) => {
      //   const errors = {};
      //   // if (!values.email) {
      //   //   errors.email = "Required";
      //   // } else if (
      //   //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   // ) {
      //   //   errors.email = "Invalid email address";
      //   // }
      //   return errors;
      // }}
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
        <Form onSubmit={handleSubmit}>
          <SettingWrapper_ST>
            <Group_ST>
              <SettingTitle_ST>Уведомления по email</SettingTitle_ST>
              <Label_ST>
                Частые
                <Radio_ST type="radio" name="notify" value="Notify" />
                <CheckMark_ST />
              </Label_ST>
              <Label_ST>
                Изредка
                <Radio_ST type="radio" name="notify" value="Notify-Rare" />
                <CheckMark_ST />
              </Label_ST>
              <Label_ST>
                Никогда
                <Radio_ST type="radio" name="notify" value="Notify-None" />
                <CheckMark_ST />
              </Label_ST>
            </Group_ST>

            <Group_ST>
              <SettingTitle_ST>Номер телефона</SettingTitle_ST>
              <Label_ST>
                Показывать
                <Radio_ST type="radio" name="tel" value="public" />
                <CheckMark_ST />
              </Label_ST>
              <Label_ST>
                Скрывать
                <Radio_ST type="radio" name="tel" value="private" />
                <CheckMark_ST />
              </Label_ST>
            </Group_ST>

            <SaveWrapper_ST>
              <Button_ST type="button">
                <span>
                  Сохранить
                  <i>&gt;&gt;</i>
                </span>
              </Button_ST>
            </SaveWrapper_ST>

            <Group_ST>
              <SettingTitle_ST>Сбросить пароль</SettingTitle_ST>
              <ButtonSetting_ST type="button">Сброс пароля</ButtonSetting_ST>
            </Group_ST>

            <Group_ST>
              <SettingTitle_ST>Удалить акаунт</SettingTitle_ST>
              <ButtonSetting_ST type="button" delete>
                Удалить акаунт
              </ButtonSetting_ST>
            </Group_ST>
          </SettingWrapper_ST>
        </Form>
      )}
    </Formik>
  );
};

export default Settings;
