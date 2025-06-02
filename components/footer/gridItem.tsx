import React from 'react';
import Link from 'next/link';
import ST from './styles';
import { ReactNode } from 'react';

interface GridItemProps {
  href: string;
  children: ReactNode;
}

const GridItem = ({ href, children }: GridItemProps) => (
  <Link href={href}>
    <ST.GridItem>{children}</ST.GridItem>
  </Link>
);

export default GridItem;
