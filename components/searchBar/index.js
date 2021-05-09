import React, { useRef, useEffect } from "react";
import { Input_ST, InputWrapper_ST } from "./styles";
import Typed from "typed.js";
import { Button } from "../layouts";
import ReactTooltip from "react-tooltip";

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
      <Input_ST
        ref={searchInput}
        type="text"
        data-tip="начните ввод в строке поиска"
      />
      <ReactTooltip type="light" />

      <Button type="button">
        <span>
          Поиск
          <i>&gt;&gt;</i>
        </span>
      </Button>
    </InputWrapper_ST>
  );
};

export default SearchBar;
