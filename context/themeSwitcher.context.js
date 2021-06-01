import { createContext } from "react";

const ThemeSwitcherContext = createContext();
const ThemeSwitcherDispatch = createContext();

function ThemeSwitcherProvider({ children, userTheme, toggleTheme }) {
  return (
    <ThemeSwitcherContext.Provider value={{ userTheme }}>
      <ThemeSwitcherDispatch.Provider value={{ toggleTheme }}>
        {children}
      </ThemeSwitcherDispatch.Provider>
    </ThemeSwitcherContext.Provider>
  );
}

export { ThemeSwitcherProvider, ThemeSwitcherContext, ThemeSwitcherDispatch };
