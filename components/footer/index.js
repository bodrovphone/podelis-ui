import React from 'react';
import { FooterStyled, Grid, GridBlock, GridBlockAddress, GridItemStyled } from './styles';
import GridItem from './gridItem';
import { Envelope } from 'react-bootstrap-icons';

const Footer = () => (
  <FooterStyled>
    <Grid>
      <GridBlock>
        <GridItemStyled>Владельцам</GridItemStyled>
        <GridItem href="/">Почему Zadelis?</GridItem>
        <GridItem href="/">Делай деньги</GridItem>
        <GridItem href="/">Безопасность</GridItem>
      </GridBlock>
      <GridBlock>
        <GridItemStyled>Арендателям</GridItemStyled>
        <GridItem href="/">Почему Zadelis?</GridItem>
        <GridItem href="/">Ищем и находим</GridItem>
        <GridItem href="/">Вперед за сокровищами</GridItem>
        <GridItem href="/">Безопасность</GridItem>
      </GridBlock>
      <GridBlock>
        <GridItemStyled>Инфо</GridItemStyled>
        <GridItem href="/">Политика конфиденциальности</GridItem>
        <GridItem href="/">Правила сервиса</GridItem>
        <GridItem href="/">Пользовательское соглашение</GridItem>
      </GridBlock>
      <GridBlock>
        <GridItemStyled>Обратная связь</GridItemStyled>  
        <address>
          <span>Свяжитесь с нами и мы постараемся быстро ответить на любой вопрос.</span>
          <div>
            <a href="mailto:info@zadelis.com"><Envelope size={32} color="black"/></a>
            <a href="viber://add?number=12345678"><img src="/static/img/viber-logo.svg"/></a>
            <a href="https://telegram.me/YourUsernameHere"><img src="/static/img/telegram-logo.svg"/></a>
          </div>
        </address>
      </GridBlock>
    </Grid>
    <strong>&#169; Zadelis. 2020</strong>
  </FooterStyled>
);

export default Footer;