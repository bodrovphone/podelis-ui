import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../components/styles/theme';
import { SideBarProvider } from '../context/sideBar.context';
import "react-image-gallery/styles/css/image-gallery.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <SideBarProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </SideBarProvider>
    )
  }
}
