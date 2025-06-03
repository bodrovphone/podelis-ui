import React, { useContext } from "react";
import ST from "./styles";
import { ThemeSwitcherContext } from "../../context/themeSwitcher.context";
import dynamic from 'next/dynamic';

const DarkModeToggle = dynamic(() => import('react-dark-mode-toggle'), { ssr: false });

const ThemeSwitcher = () => {
  const { userTheme, toggleTheme } = useContext(ThemeSwitcherContext);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const darkTheme = process.env.NEXT_PUBLIC_DARK_THEME;
  const lightTheme = process.env.NEXT_PUBLIC_LIGHT_THEME;

  const saveTheme = (theme: any) => {
    if (typeof window !== 'undefined') { // Guard localStorage access
      window.localStorage.setItem("theme", JSON.stringify(theme));
    }
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
    <ST.ThemeWrapper onClick={(e: any) => e.stopPropagation()}>
      {isClient && (
        <DarkModeToggle
          onChange={toggle}
          checked={userTheme === darkTheme}
          size={60}
        />
      )}
    </ST.ThemeWrapper>
  );
};

export default ThemeSwitcher;
