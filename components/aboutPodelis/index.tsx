import React from 'react';
import Logo from '../logo';
import Image from 'next/image';

const AboutPodelis = (props: any) => (
  <section
    {...props}
    className="h-[300px] bg-[lemonchiffon] w-full py-5 px-[0.3em] my-[30px] relative"
  >
    <Logo />
    <div className="text-[1.1em] text-center leading-[1.5em] pt-5 font-['podelis-font-italic']">
      Podelis - Простой и удобный шаринг-сервис.
      <br />
      Арендуй поблизости.
      <br />
      Пользуйся тем что нужно, не покупая.
      <br />
      Сдавай в аренду вещи и зарабатывай.
      <br />
    </div>
    <div className="my-5 mx-auto text-center">
      <a
        target="_blank"
        rel="external"
        href="https://www.instagram.com/explore/tags/podelis/"
        className="mr-2.5"
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
        className="mr-2.5"
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
        className="mr-2.5"
      >
        <Image
          src="/img/twitter-logo.png"
          alt="Twitter Logo"
          className="image"
          width={42}
          height={42}
        />
      </a>
    </div>
  </section>
);

export default AboutPodelis;
