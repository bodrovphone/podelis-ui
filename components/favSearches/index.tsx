import React, { useState } from "react";
import SingleSearch from "./singleSearch";

import ST from "./styles";

interface FavSearchesProps {
  queries: any[];
  [key: string]: any; // For other props
}

const FavSearches = ({ queries, ...props }: FavSearchesProps) => (
  <ST.FavSearchesContainer {...props}>
    {queries.map((query: any) => (
      <SingleSearch key={query.label} query={query} />
    ))}
  </ST.FavSearchesContainer>
);

export default FavSearches;
