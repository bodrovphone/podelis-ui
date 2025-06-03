import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface ThemeSwitcherContextType {
  userTheme: string | undefined | any; // Using any for simplicity for the theme string
  toggleTheme: Dispatch<SetStateAction<string | undefined>> | any; // Using any for simplicity for the setter
}

const ThemeSwitcherContext = createContext<ThemeSwitcherContextType | undefined>(undefined);

interface ThemeSwitcherProviderProps {
  children: ReactNode;
}

function ThemeSwitcherProvider({ children }: ThemeSwitcherProviderProps) {
  const [userTheme, toggleTheme] = useState<string | undefined>(() => {
    if (typeof window === "undefined") {
      return process.env.NEXT_PUBLIC_LIGHT_THEME;
    }
    try {
      const item = localStorage?.getItem("theme");
      return item ? JSON.parse(item) : process.env.NEXT_PUBLIC_LIGHT_THEME;
    } catch (error) {
      console.error("Error parsing theme from localStorage", error);
      return process.env.NEXT_PUBLIC_LIGHT_THEME;
    }
  });

  return (
    <ThemeSwitcherContext.Provider value={{ userTheme, toggleTheme }}>
      {children}
    </ThemeSwitcherContext.Provider>
  );
}

export { ThemeSwitcherProvider, ThemeSwitcherContext };
