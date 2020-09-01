import React from 'react';
import Container from './container';
import Head from './head';
import { MainStyled, Header1Styled, DescriptionStyled } from './styles';

const Layout = (props) => (
  <>
    <Head {...props} />
    <Container {...props} />
  </>
)

export const Main = ({children}) => (
  <MainStyled>
    {children}
  </MainStyled>
);

export const Header1 = (props) => (
  <Header1Styled {...props}/>
);

export const Description = (props) => (
  <DescriptionStyled {...props}>
    {props.children}
  </DescriptionStyled>
);

export default Layout;