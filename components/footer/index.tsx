import React from 'react';
import GridItem from './gridItem';
import { Envelope } from 'react-bootstrap-icons';
import Image from 'next/image';

const Footer = () => (
  <footer data-testid="footer" className="bg-wellDone w-full pt-[25px] px-2 pb-20 relative">
    <div className="grid grid-cols-1 gap-y-5 mobileM:grid-cols-2 md:w-[90%] md:mx-auto md:grid-cols-4 lg:w-[70%]">
      <ul className="leading-[30px] m-0 text-medium">
        <li className="list-none font-bold mb-[5px] text-rareMedium hover:list-none hover:text-mediumRare hover:cursor-default">Владельцам</li>
        <GridItem href="/about">Почему Podelis?</GridItem>
        <GridItem href="/blog/make-money">Делай деньги</GridItem>
        <GridItem href="/blog/go-for-it">Вперед за сокровищами</GridItem>
        <GridItem href="/blog/security-owner">Безопасность</GridItem>
      </ul>
      <ul className="leading-[30px] m-0 text-medium">
        <li className="list-none font-bold mb-[5px] text-rareMedium hover:list-none hover:text-mediumRare hover:cursor-default">Арендателям</li>
        <GridItem href="/about">Почему Podelis?</GridItem>
        <GridItem href="/blog/seek-find">Ищем и находим</GridItem>
        <GridItem href="/blog/security-sharer">Безопасность</GridItem>
      </ul>
      <ul className="leading-[30px] m-0 text-medium">
        <li className="list-none font-bold mb-[5px] text-rareMedium hover:list-none hover:text-mediumRare hover:cursor-default">Инфо</li>
        <GridItem href="/privacy-policy">Политика конфиденциальности</GridItem>
        <GridItem href="/rules">Правила сервиса</GridItem>
        <GridItem href="/privacy-policy">Пользовательское соглашение</GridItem>
      </ul>
      <ul className="leading-[30px] m-0 text-medium">
        <li className="list-none font-bold mb-[5px] text-rareMedium hover:list-none hover:text-mediumRare hover:cursor-default">Обратная связь</li>
        <address>
          <span>
            Свяжитесь с нами и мы постараемся быстро ответить на любой вопрос.
          </span>
          <div className="flex justify-evenly">
            <a href="mailto:info@podelis.com">
              <Envelope size={32} color="black" className="w-8 h-8 mr-2.5" />
            </a>
            <a href="viber://add?number=12345678">
              <Image
                src="/img/viber-logo.svg"
                alt="Picture of viber messanger"
                width={32}
                height={32}
                className="w-8 h-8 mr-2.5"
              />
            </a>
            <a href="https://telegram.me/YourUsernameHere">
              <Image
                src="/img/telegram-logo.svg"
                alt="Picture of viber messanger"
                width={32}
                height={32}
                className="w-8 h-8 mr-2.5"
              />
            </a>
          </div>
        </address>
      </ul>
    </div>
    <strong className="absolute bottom-2.5 right-5">&#169; Podelis. 2020</strong>
  </footer>
);

export default Footer;
