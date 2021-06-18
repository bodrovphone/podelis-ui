import React from "react";
import Link from "next/link";
import ST from "./styles";

const GridItem = ({ href, children }) => (
  <Link href={href}>
    <ST.GridItem>
      <a>{children}</a>
    </ST.GridItem>
  </Link>
);

export default GridItem;
