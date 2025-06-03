import React, { useState, useEffect, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../components/styles/theme';
import { SideBarProvider } from '../context/sideBar.context';
import {
  ThemeSwitcherProvider,
  ThemeSwitcherContext,
} from '../context/themeSwitcher.context';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../public/main.css';

interface PodelisProps {
  Component: any;
  pageProps: any;
}

const Podelis = ({ Component, pageProps }: PodelisProps) => {
  return (
    <SideBarProvider>
      <ThemeSwitcherProvider>
        <ThemeSwitcherContext.Consumer>
          {(ctx: any) => {
            return (
              <ThemeProvider theme={themes[(ctx.userTheme = 'blueSky')]}>
                <Component {...pageProps} />
              </ThemeProvider>
            );
          }}
        </ThemeSwitcherContext.Consumer>
      </ThemeSwitcherProvider>
    </SideBarProvider>
  );
};

export default Podelis;
