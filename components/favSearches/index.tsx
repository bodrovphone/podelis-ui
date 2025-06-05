import React, { useState } from "react";
import SingleSearch from "./singleSearch";

interface FavSearchesProps {
  queries: any[];
  [key: string]: any; // For other props
}

const FavSearches = ({ queries, ...props }: FavSearchesProps) => (
  <div {...props} className="flex flex-col gap-[30px] my-10 md:w-[60%] md:mx-auto">
    {queries.map((query: any) => (
      <SingleSearch key={query.label} query={query} />
    ))}
  </div>
);

export default FavSearches;
