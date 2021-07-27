import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import themes from "../components/styles/theme";
import { SideBarProvider } from "../context/sideBar.context";
import { ThemeSwitcherProvider } from "../context/themeSwitcher.context";
import "react-image-gallery/styles/css/image-gallery.css";

const Zadelis = ({ Component, pageProps }) => {
  const [userTheme, toggleTheme] = useState(
    process.env.NEXT_PUBLIC_LIGHT_THEME
  );

  useEffect(() => {
    const anotherTheme =
      (typeof window !== "undefined" &&
        JSON.parse(localStorage.getItem("theme"))) ||
      process.env.NEXT_PUBLIC_LIGHT_THEME;

    toggleTheme(anotherTheme);
  }, []);

  return (
    <SideBarProvider>
      <ThemeSwitcherProvider userTheme={userTheme} toggleTheme={toggleTheme}>
        <ThemeProvider theme={themes[userTheme]}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeSwitcherProvider>
    </SideBarProvider>
  );
};

export default Zadelis;
