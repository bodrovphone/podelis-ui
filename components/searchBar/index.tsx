import React, { useRef, useEffect } from 'react';
import ST from './styles';
import Typed from 'typed.js';
import LT from '../layouts';
// import ReactTooltip from 'react-tooltip'; // Will be dynamically imported
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ReactTooltip = dynamic(() => import('react-tooltip').then(mod => mod.Tooltip), { ssr: false });

const SearchBar = (props: any) => {
  const searchInput = useRef<HTMLInputElement>(null);
  const [isClient, setIsClient] = React.useState(false);

  //  I need second useEffect becase it runs only once
  useEffect(() => {
    setIsClient(true);
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
        data-tooltip-id="search-tooltip" data-tooltip-content="начните ввод в строке поиска"
      />
      {isClient && <ReactTooltip id="search-tooltip" variant="light" />}

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
