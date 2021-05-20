import React from "react";
import { LoadMore_ST } from "./styles";
import { Button } from "../layouts";
import Link from "next/link";

const LoadMore = ({ href = "test" }) => (
  <LoadMore_ST>
    <Button>
      <span>
        <Link href={href}>
          <a>Показать еще</a>
        </Link>
        <i>&gt;&gt;</i>
      </span>
    </Button>
  </LoadMore_ST>
);

export default LoadMore;
