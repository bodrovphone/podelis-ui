import React from "react";
import Link from "next/link";
import { GridItem_ST } from "./styles";

const GridItem = ({ href, children }) => (
  <Link href={href}>
    <GridItem_ST>
      <a>{children}</a>
    </GridItem_ST>
  </Link>
);

export default GridItem;
