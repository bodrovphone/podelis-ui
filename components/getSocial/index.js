import React from "react";
import ST from "./styles";
import Image from "next/image";

const GetSocial = (props) => (
  <ST.Wrapper>
    <Image
      src="/img/getSocial/getSocial-bycicle.jpg"
      alt="picture of bycicle"
      width="100%"
      height="100%"
      layout="responsive"
    />
    <Image
      src="/img/getSocial/getSocial-worker.jpg"
      alt="picture of bycicle"
      width="100%"
      height="100%"
    />
    <Image
      src="/img/getSocial/getSocial-kayak.jpg"
      alt="picture of bycicle"
      width="100%"
      height="100%"
      layout="responsive"
    />
    <Image
      src="/img/getSocial/getSocial-suit.jpg"
      alt="picture of bycicle"
      width="100%"
      height="100%"
      layout="responsive"
    />
  </ST.Wrapper>
);

export default GetSocial;
