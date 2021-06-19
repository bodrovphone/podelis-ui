import React, { useState } from "react";
import SingleSearch from "./singleSearch";

import ST from "./styles";

const FavSearches = (props) => (
  <ST.FavSearchesContainer>
    {props.queries.map((query) => (
      <SingleSearch query={query} />
    ))}
  </ST.FavSearchesContainer>
);

export default FavSearches;
