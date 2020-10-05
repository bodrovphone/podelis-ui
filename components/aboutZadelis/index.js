import React from 'react';
import { AboutStyled, ContentStyled, GoSocial } from './styles';
import Logo from '../logo';

const AboutZadelis = () => (
  <AboutStyled>
    <Logo />
    <ContentStyled>
      Zadils -  Простой и удобный шаринг-сервис.<br />
      Арендуй поблизости.<br />
      Пользуйся тем что нужно, не покупая.<br />
      Сдавай в аренду вещи и зарабатывай.<br />
    </ContentStyled>
    <GoSocial>
      <a target="_blank" rel="external" href="https://www.instagram.com/explore/tags/zadelis/"><img src="static/img/instagram-logo.png" alt="Facebook Logo" /></a>
      <a target="_blank" rel="external" href="https://www.facebook.com/hashtag/zadelis"><img src="static/img/facebook-logo.png" alt="Instagram Logo"/></a>
      <a target="_blank" rel="external" href="https://twitter.com/hashtag/zadelis"><img src="static/img/twitter-logo.png" alt="Twitter Logo"/></a>
    </GoSocial>
  </AboutStyled>
)

export default AboutZadelis;