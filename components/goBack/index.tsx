import Link from 'next/link';
import ST from './styles';
import { ReactNode } from 'react';

interface GoBackProps {
  href: string;
  children: ReactNode;
}

const GoBack = ({ href, children }: GoBackProps) => (
  <ST.Wrapper>
    <ST.GoBack>
      <Link href={href}>{children}</Link>
    </ST.GoBack>
  </ST.Wrapper>
);

export default GoBack;
