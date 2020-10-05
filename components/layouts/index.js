import React from 'react';
import Container from './container';
import Head from './head';
import { MainStyled, H1Styled, DescriptionStyled, CenteredStyled } from './styles';

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

export const H1 = (props) => (
  <H1Styled {...props}/>
);

export const Description = (props) => (
  <DescriptionStyled {...props}>
    {props.children}
  </DescriptionStyled>
);

export const Centered = ({children}) => (
  <CenteredStyled>
    {children}
  </CenteredStyled>
);
export default Layout;