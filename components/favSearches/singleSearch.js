import React, { useState } from "react";
import { SearchContainer_ST, Query_ST, Meta_ST, New_ST } from "./styles";
import { Search, Diagram3, XCircle, Plus } from "react-bootstrap-icons";
import Link from "next/link";

const SingleSearch = ({ query }) => (
  <SearchContainer_ST>
    <Query_ST>
      <Link href={`/search/${query.label}`}>
        <a>
          <Search />
          <span>{query.label}</span>
        </a>
      </Link>
    </Query_ST>
    <Meta_ST>
      <XCircle size="18" color="grey" />
      {query.tags.map((tag) => (
        <span>{tag}</span>
      ))}
      <Diagram3 />
      <New_ST>
        <Plus size="15" />
        <span>10</span>
      </New_ST>
    </Meta_ST>
  </SearchContainer_ST>
);

export default SingleSearch;
