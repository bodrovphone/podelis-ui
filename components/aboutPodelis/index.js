import React from 'react';
import ST from './styles';
import Logo from '../logo';
import Image from 'next/image';

const AboutPodelis = (props) => (
  <ST.About {...props}>
    <Logo />
    <ST.Content>
      Podelis - Простой и удобный шаринг-сервис.
      <br />
      Арендуй поблизости.
      <br />
      Пользуйся тем что нужно, не покупая.
      <br />
      Сдавай в аренду вещи и зарабатывай.
      <br />
    </ST.Content>
    <ST.Social>
      <a
        target="_blank"
        rel="external"
        href="https://www.instagram.com/explore/tags/podelis/"
      >
        <Image
          src="/img/instagram-logo.png"
          alt="Facebook Logo"
          className="image"
          width={42}
          height={42}
        />
      </a>
      <a
        target="_blank"
        rel="external"
        href="https://www.facebook.com/hashtag/podelis"
      >
        <Image
          src="/img/facebook-logo.png"
          alt="Instagram Logo"
          className="image"
          width={42}
          height={42}
        />
      </a>
      <a
        target="_blank"
        rel="external"
        href="https://twitter.com/hashtag/podelis"
      >
        <Image
          src="/img/twitter-logo.png"
          alt="Twitter Logo"
          className="image"
          width={42}
          height={42}
        />
      </a>
    </ST.Social>
  </ST.About>
);

export default AboutPodelis;
