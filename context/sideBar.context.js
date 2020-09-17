import { useState, createContext } from 'react';

const SideBarContext = createContext();
const SideBarDispatch = createContext();

function SideBarProvider ({ children }){
  const [ navState, toggleNav ] = useState(false);
  const [ searchFocus, triggerFocus ] = useState(false);
  return (
    <SideBarContext.Provider value={{navState, searchFocus}}>
      <SideBarDispatch.Provider value={{toggleNav, triggerFocus}}>
        {children}
      </SideBarDispatch.Provider>
    </SideBarContext.Provider>
  )
}

export { SideBarProvider, SideBarContext, SideBarDispatch };
