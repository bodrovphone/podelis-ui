import React, { useRef, useEffect } from "react";
import { Input, InputWrapper } from "./styles";
import Typed from "typed.js";

const SearchBar = () => {
  const searchInput = useRef(null);
  //  I need second useEffect becase it runs only once
  useEffect(() => {
    const typed = new Typed(searchInput.current, {
      strings: [
        "что будем искать? ^4000",
        "бетономешалка",
        "лодка",
        "машина",
        "кафе",
        "стадион",
        "остров",
        "iphone",
        "дрель",
        "палатка",
        "дача",
      ],
      typeSpeed: 80,
      backSpeed: 30,
      loop: true,
      loopCount: Infinity,
      attr: "placeholder",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <InputWrapper>
      <Input ref={searchInput} type="text" />
    </InputWrapper>
  );
};

export default SearchBar;
