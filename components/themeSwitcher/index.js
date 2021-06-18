import React, { useContext } from "react";
import ST from "./styles";
import {
  ThemeSwitcherContext,
  ThemeSwitcherDispatch,
} from "../../context/themeSwitcher.context";

import DarkModeToggle from "react-dark-mode-toggle";

const ThemeSwitcher = () => {
  const { userTheme } = useContext(ThemeSwitcherContext);
  const { toggleTheme } = useContext(ThemeSwitcherDispatch);

  const darkTheme = process.env.NEXT_PUBLIC_DARK_THEME;
  const lightTheme = process.env.NEXT_PUBLIC_LIGHT_THEME;

  const saveTheme = (theme) => {
    console.log("saveTheme", theme);
    window && window.localStorage.setItem("theme", JSON.stringify(theme));
  };

  const toggle = () => {
    if (userTheme === lightTheme) {
      toggleTheme(darkTheme);
      saveTheme(darkTheme);
    } else {
      toggleTheme(lightTheme);
      saveTheme(lightTheme);
    }
  };

  return (
    <ST.ThemeWrapper onClick={(e) => e.stopPropagation()}>
      <DarkModeToggle
        onChange={toggle}
        checked={userTheme === darkTheme}
        size={60}
      />
    </ST.ThemeWrapper>
  );
};

export default ThemeSwitcher;
