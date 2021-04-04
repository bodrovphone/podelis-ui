import React from "react";
import { Footer_ST, Grid_ST, GridBlock_ST, GridItem_ST } from "./styles";
import GridItem from "./gridItem";
import { Envelope } from "react-bootstrap-icons";

const Footer = () => (
  <Footer_ST>
    <Grid_ST>
      <GridBlock_ST>
        <GridItem_ST>Владельцам</GridItem_ST>
        <GridItem href="/">Почему Zadelis?</GridItem>
        <GridItem href="/">Делай деньги</GridItem>
        <GridItem href="/">Безопасность</GridItem>
      </GridBlock_ST>
      <GridBlock_ST>
        <GridItem_ST>Арендателям</GridItem_ST>
        <GridItem href="/">Почему Zadelis?</GridItem>
        <GridItem href="/">Ищем и находим</GridItem>
        <GridItem href="/">Вперед за сокровищами</GridItem>
        <GridItem href="/">Безопасность</GridItem>
      </GridBlock_ST>
      <GridBlock_ST>
        <GridItem_ST>Инфо</GridItem_ST>
        <GridItem href="/">Политика конфиденциальности</GridItem>
        <GridItem href="/">Правила сервиса</GridItem>
        <GridItem href="/">Пользовательское соглашение</GridItem>
      </GridBlock_ST>
      <GridBlock_ST>
        <GridItem_ST>Обратная связь</GridItem_ST>
        <address>
          <span>
            Свяжитесь с нами и мы постараемся быстро ответить на любой вопрос.
          </span>
          <div>
            <a href="mailto:info@zadelis.com">
              <Envelope size={32} color="black" />
            </a>
            <a href="viber://add?number=12345678">
              <img src="img/viber-logo.svg" />
            </a>
            <a href="https://telegram.me/YourUsernameHere">
              <img src="img/telegram-logo.svg" />
            </a>
          </div>
        </address>
      </GridBlock_ST>
    </Grid_ST>
    <strong>&#169; Zadelis. 2020</strong>
  </Footer_ST>
);

export default Footer;
