import React from 'react';
import Link from 'next/link';
import { GridItemStyled } from './styles';

const GridItem = ({href, children}) => (
  <Link href={href}>
    <GridItemStyled>
      <a>
        {children}
      </a>
    </GridItemStyled>
  </Link>
);

export default GridItem;