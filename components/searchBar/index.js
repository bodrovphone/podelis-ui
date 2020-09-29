import React, { useContext, useRef, useEffect } from 'react';
import { SideBarContext, SideBarDispatch } from '../../context/sideBar.context';
import { Input, InputWrapper } from './styles';
import Typed from "typed.js";

const SearchBar = () => {
  const { searchFocus } = useContext(SideBarContext);
  const { triggerFocus } = useContext(SideBarDispatch);
  const searchInput = useRef(null);
 
  useEffect(() => {searchFocus && searchInput.current.focus()});
//  I need second useEffect becase it runs only once
  useEffect(() => {
    const typed = new Typed(searchInput.current, {
      strings: [
        'что будем искать? ^4000',
        'бетономешалка',
        'лодка',
        'машина',
        'кафе',
        'стадион',
        'остров',
        'iphone',
        'дрель',
        'палатка',
        'дача'
      ],
      typeSpeed: 80,
      backSpeed: 30,
      loop: true,
      loopCount: Infinity,
      attr: 'placeholder'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <InputWrapper>
      <Input ref={searchInput} type="text" onBlur={() => triggerFocus(false)}/>
    </InputWrapper>
  )
}

export default SearchBar;

