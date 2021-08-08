import { useState, createContext } from "react";

const SideBarContext = createContext();

function SideBarProvider({ children }) {
  const [navState, toggleNav] = useState(false);
  return (
    <SideBarContext.Provider value={{ navState, toggleNav }}>
      {children}
    </SideBarContext.Provider>
  );
}

export { SideBarProvider, SideBarContext };
