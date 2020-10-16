import React from 'react';
import Container from './container';
import Head from './head';
import { 
  MainStyled,
  H1Styled,
  DescriptionStyled,
  CenteredStyled,
  TwoColumnsDesktop,
  TwoColumns } from './styles';

const Layout = (props) => (
  <>
    <Head {...props} />
    <Container {...props} />
  </>
)

const Main = ({children}) => (
  <MainStyled>
    {children}
  </MainStyled>
);

const H1 = (props) => (
  <H1Styled {...props}/>
);

const Description = (props) => (
  <DescriptionStyled {...props}>
    {props.children}
  </DescriptionStyled>
);

const Centered = ({children}) => (
  <CenteredStyled>
    {children}
  </CenteredStyled>
);

export { 
  TwoColumnsDesktop,
  TwoColumns,
  Centered,
  Description,
  H1,
  Main
 };

export default Layout;