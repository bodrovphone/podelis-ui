import React, { useRef, useEffect } from "react";
import { Input_ST, InputWrapper_ST } from "./styles";
import Typed from "typed.js";
import { Button_ST } from "../loadMore/styles";

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
    <InputWrapper_ST>
      <Input_ST ref={searchInput} type="text" />
      <Button_ST type="button">
        <span>
          Поиск
          <i>&gt;&gt;</i>
        </span>
      </Button_ST>
    </InputWrapper_ST>
  );
};

export default SearchBar;
