import React, { useContext, useRef, useEffect } from 'react';
import { SideBarContext, SideBarDispatch } from '../../context/sideBar.context';
import { Input, InputWrapper } from './styles';


const SearchBar = () => {
  const { searchFocus } = useContext(SideBarContext);
  const { triggerFocus } = useContext(SideBarDispatch);
  const searchInput = useRef(null);

  useEffect(() => {searchFocus && searchInput.current.focus()})

  return (
    <InputWrapper>
      <Input type="text" ref={searchInput} onBlur={() => triggerFocus(false)} placeholder="Что нужно найти?"></Input>
    </InputWrapper>
  )
}

export default SearchBar;

