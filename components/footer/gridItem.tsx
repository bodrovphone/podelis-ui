import React from 'react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface GridItemProps {
  href: string;
  children: ReactNode;
}

const GridItem = ({ href, children }: GridItemProps) => (
  <Link href={href}>
    <li className="hover:cursor-pointer hover:text-rare">{children}</li>
  </Link>
);

export default GridItem;
