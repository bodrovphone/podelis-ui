import React, { useState } from "react";
import SingleSearch from "./singleSearch";

import { FavSearchesContainer_ST } from "./styles";

const FavSearches = (props) => (
  <FavSearchesContainer_ST>
    {props.queries.map((query) => (
      <SingleSearch query={query} />
    ))}
  </FavSearchesContainer_ST>
);

export default FavSearches;
