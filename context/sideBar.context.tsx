import { useState, createContext, ReactNode, Dispatch, SetStateAction } from "react";

interface SideBarContextType {
  navState: boolean;
  toggleNav: Dispatch<SetStateAction<boolean>> | any; // Using any for simplicity for the setter
}

const SideBarContext = createContext<SideBarContextType | undefined>(undefined);

interface SideBarProviderProps {
  children: ReactNode;
}

function SideBarProvider({ children }: SideBarProviderProps) {
  const [navState, toggleNav] = useState(false);
  return (
    <SideBarContext.Provider value={{ navState, toggleNav }}>
      {children}
    </SideBarContext.Provider>
  );
}

export { SideBarProvider, SideBarContext };
