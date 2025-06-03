import React, { useState } from 'react';
import { Search, Diagram3, XCircle, Plus } from 'react-bootstrap-icons';
import Link from 'next/link';

interface SingleSearchProps {
  query: any;
}

const SingleSearch = ({ query }: SingleSearchProps) => (
  <div className="shadow-logoHeader rounded-bl-[10px] rounded-tr-[10px] font-['podelis-font'] flex flex-col gap-[5px] pl-2.5 bg-favSearchBg relative w-[95%] mx-auto">
    <div className="query-container"> {/* Added a wrapper for ST.Query styles that were on a non-DOM element */}
      <Link href={`/search/${query.label}`}>
        <a className="flex items-center gap-[5px] pl-2.5 no-underline text-black">
          <Search />
          <span>{query.label}</span>
        </a>
      </Link>
    </div>
    <div className="flex gap-[5px] pl-2.5 items-center text-[0.8em] mr-2.5">
      <XCircle size="18" color="grey" className="first:absolute first:top-[-9px] first:right-[-9px]" />
      {query.tags.map((tag: any, index: number) => (
        <span key={index}>{tag}</span>
      ))}
      <Diagram3 />
      <div className="ml-auto">
        <Plus size="15" className="static" /> {/* Ensured Plus icon is static */}
        <span>10</span>
      </div>
    </div>
  </div>
);

export default SingleSearch;
