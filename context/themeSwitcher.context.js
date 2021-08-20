import { createContext, useState } from "react";

const ThemeSwitcherContext = createContext();

function ThemeSwitcherProvider({ children }) {
  const [userTheme, toggleTheme] = useState(() =>
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_LIGHT_THEME
      : JSON.parse(localStorage?.getItem("theme")) ||
        process.env.NEXT_PUBLIC_LIGHT_THEME
  );

  return (
    <ThemeSwitcherContext.Provider value={{ userTheme, toggleTheme }}>
      {children}
    </ThemeSwitcherContext.Provider>
  );
}

export { ThemeSwitcherProvider, ThemeSwitcherContext };
