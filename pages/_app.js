import React, { useState, useEffect, useContext } from "react";
import { ThemeProvider } from "styled-components";
import themes from "../components/styles/theme";
import { SideBarProvider } from "../context/sideBar.context";
import {
  ThemeSwitcherProvider,
  ThemeSwitcherContext,
} from "../context/themeSwitcher.context";
import "react-image-gallery/styles/css/image-gallery.css";

const Zadelis = ({ Component, pageProps }) => {
  return (
    <SideBarProvider>
      <ThemeSwitcherProvider>
        <ThemeSwitcherContext.Consumer>
          {(ctx) => {
            return (
              <ThemeProvider theme={themes[ctx.userTheme]}>
                <Component {...pageProps} />
              </ThemeProvider>
            );
          }}
        </ThemeSwitcherContext.Consumer>
      </ThemeSwitcherProvider>
    </SideBarProvider>
  );
};

export default Zadelis;
