import React, { useRef, useEffect } from 'react';
import ST from './styles';
import Typed from 'typed.js';
import LT from '../layouts';
import ReactTooltip from 'react-tooltip';
import Link from 'next/link';

const SearchBar = (props) => {
  const searchInput = useRef(null);
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
        'дача',
      ],
      typeSpeed: 80,
      backSpeed: 30,
      loop: true,
      loopCount: Infinity,
      attr: 'placeholder',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <ST.InputWrapper {...props}>
      <ST.Input
        ref={searchInput}
        type="text"
        data-tip="начните ввод в строке поиска"
      />
      <ReactTooltip type="light" />

      <LT.Button type="button">
        <span>
          <Link href="/search">Поиск</Link>
          <i>&gt;&gt;</i>
        </span>
      </LT.Button>
    </ST.InputWrapper>
  );
};

export default SearchBar;
