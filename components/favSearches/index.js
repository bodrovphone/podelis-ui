import React, { useState } from "react";
import SingleSearch from "./singleSearch";

import ST from "./styles";

const FavSearches = ({ queries, ...props }) => (
  <ST.FavSearchesContainer {...props}>
    {queries.map((query) => (
      <SingleSearch key={query.label} query={query} />
    ))}
  </ST.FavSearchesContainer>
);

export default FavSearches;
