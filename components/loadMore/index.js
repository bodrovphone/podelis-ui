import React from "react";
import { LoadMore_ST } from "./styles";
import { Button } from "../layouts";

const LoadMore = () => (
  <LoadMore_ST>
    <Button>
      <span>
        Показать еще
        <i>&gt;&gt;</i>
      </span>
    </Button>
  </LoadMore_ST>
);

export default LoadMore;
