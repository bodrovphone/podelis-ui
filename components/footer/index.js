import React from "react";
import { Footer_ST, Grid_ST, GridBlock_ST, GridItem_ST } from "./styles";
import GridItem from "./gridItem";
import { Envelope } from "react-bootstrap-icons";
import Image from "next/image";

const Footer = () => (
  <Footer_ST>
    <Grid_ST>
      <GridBlock_ST>
        <GridItem_ST>Владельцам</GridItem_ST>
        <GridItem href="/about">Почему Zadelis?</GridItem>
        <GridItem href="/blog/make-money">Делай деньги</GridItem>
        <GridItem href="/security-owner">Безопасность</GridItem>
      </GridBlock_ST>
      <GridBlock_ST>
        <GridItem_ST>Арендателям</GridItem_ST>
        <GridItem href="/about">Почему Zadelis?</GridItem>
        <GridItem href="/blog/seek-find">Ищем и находим</GridItem>
        <GridItem href="/blog/go-for-it">Вперед за сокровищами</GridItem>
        <GridItem href="/blog/security-sharer">Безопасность</GridItem>
      </GridBlock_ST>
      <GridBlock_ST>
        <GridItem_ST>Инфо</GridItem_ST>
        <GridItem href="/privacy-policy">Политика конфиденциальности</GridItem>
        <GridItem href="/rules">Правила сервиса</GridItem>
        <GridItem href="/privacy-policy">Пользовательское соглашение</GridItem>
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
              <Image
                src="/img/viber-logo.svg"
                alt="Picture of viber messanger"
                width={32}
                height={32}
              />
            </a>
            <a href="https://telegram.me/YourUsernameHere">
              <Image
                src="/img/telegram-logo.svg"
                alt="Picture of viber messanger"
                width={32}
                height={32}
              />
            </a>
          </div>
        </address>
      </GridBlock_ST>
    </Grid_ST>
    <strong>&#169; Zadelis. 2020</strong>
  </Footer_ST>
);

export default Footer;
