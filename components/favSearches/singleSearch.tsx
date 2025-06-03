import React, { useState } from 'react';
import ST from './styles';
import { Search, Diagram3, XCircle, Plus } from 'react-bootstrap-icons';
import Link from 'next/link';

interface SingleSearchProps {
  query: any;
}

const SingleSearch = ({ query }: SingleSearchProps) => (
  <ST.SearchContainer>
    <ST.Query>
      <Link href={`/search/${query.label}`}>
        <Search />
        <span>{query.label}</span>
      </Link>
    </ST.Query>
    <ST.Meta>
      <XCircle size="18" color="grey" />
      {query.tags.map((tag: any, index: number) => (
        <span key={index}>{tag}</span>
      ))}
      <Diagram3 />
      <ST.New>
        <Plus size="15" />
        <span>10</span>
      </ST.New>
    </ST.Meta>
  </ST.SearchContainer>
);

export default SingleSearch;
