import React from 'react';
import Container from './container';
import Head from './head';

const Layout = (props) => (
  <>
  <Head {...props} />
  <Container {...props} />
  </>
)

export default Layout;