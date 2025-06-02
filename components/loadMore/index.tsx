import React from 'react';
import ST from './styles';
import LT from '../layouts';
import Link from 'next/link';

interface LoadMoreProps {
  href?: string;
  [key: string]: any; // For other ...props
}

const LoadMore = ({ href = '/test', ...props }: LoadMoreProps) => (
  <ST.LoadMore {...props}>
    <LT.Button>
      <span>
        <Link href={href}>Показать еще</Link>
        <i>&gt;&gt;</i>
      </span>
    </LT.Button>
  </ST.LoadMore>
);

export default LoadMore;
