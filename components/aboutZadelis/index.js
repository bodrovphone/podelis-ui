import React from "react";
import { About_ST, Content_ST, Social_ST } from "./styles";
import Logo from "../logo";

const AboutZadelis = () => (
  <About_ST>
    <Logo />
    <Content_ST>
      Zadils - Простой и удобный шаринг-сервис.
      <br />
      Арендуй поблизости.
      <br />
      Пользуйся тем что нужно, не покупая.
      <br />
      Сдавай в аренду вещи и зарабатывай.
      <br />
    </Content_ST>
    <Social_ST>
      <a
        target="_blank"
        rel="external"
        href="https://www.instagram.com/explore/tags/zadelis/"
      >
        <img
          src={require("../../static/img/instagram-logo.png")}
          alt="Facebook Logo"
        />
      </a>
      <a
        target="_blank"
        rel="external"
        href="https://www.facebook.com/hashtag/zadelis"
      >
        <img
          src={require("../../static/img/facebook-logo.png")}
          alt="Instagram Logo"
        />
      </a>
      <a
        target="_blank"
        rel="external"
        href="https://twitter.com/hashtag/zadelis"
      >
        <img
          src={require("../../static/img/twitter-logo.png")}
          alt="Twitter Logo"
        />
      </a>
    </Social_ST>
  </About_ST>
);

export default AboutZadelis;
