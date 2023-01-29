import React from 'react';
import ST from './styles';
import Image from 'next/image';

const GetSocial = (props) => (
  <ST.Wrapper {...props}>
    <Image
      src="/img/getSocial/getSocial-bycicle.jpg"
      alt="picture of bycicle"
      width={150}
      height={200}
    />
    <Image
      src="/img/getSocial/getSocial-worker.jpg"
      alt="picture of bycicle"
      width={150}
      height={200}
    />
    <Image
      src="/img/getSocial/getSocial-kayak.jpg"
      alt="picture of bycicle"
      width={150}
      height={200}
    />
    <Image
      src="/img/getSocial/getSocial-suit.jpg"
      alt="picture of bycicle"
      width={150}
      height={200}
    />
  </ST.Wrapper>
);

export default GetSocial;
