import { useState, createContext } from 'react';

const SideBarContext = createContext();
const SideBarDispatch = createContext();

function SideBarProvider ({ children }){
  const [ navState, toggleNav ] = useState(false)
  return (
    <SideBarContext.Provider value={navState}>
      <SideBarDispatch.Provider value={toggleNav}>
        {children}
      </SideBarDispatch.Provider>
    </SideBarContext.Provider>
  )
}

export { SideBarProvider, SideBarContext, SideBarDispatch };
