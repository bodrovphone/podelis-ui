import React, { useEffect, useState } from "react";
import ST from "./styles";
import SingleCard from "../singleCard";
// defaultTopPosts will be replaced with getStaticProps and fetch to API during build time
// when we have it on backend

const CardsWidget = ({ prokats }) => {
  //   {
  //     "_id" : "60e434c26aae48c2dbb9c55b",
  //     "title" : "Рука Лицо",
  //     "description" : "Отличное лица да и рука тоже сойдет.",
  //     "price" : 500,
  //     "period" : 4,
  //     "units" : false,
  //     "conditions" : [
  //         "deposit"
  //     ],
  //     "deposit" : 5000,
  //     "pledge" : "",
  //     "city" : "Днипро",
  //     "files" : ["data:url"
  //     ],
  //     "dateCreated" : "2021-07-06"
  // }

  if (prokats) {
    return (
      <ST.Cards>
        {prokats.map(({ title, description, files = [], _id }) => (
          <SingleCard
            title={title}
            description={description}
            imageSrc={files[0]}
            id={_id}
            key={_id}
          />
        ))}
      </ST.Cards>
    );
  }

  return (
    <div>Just a placeholder for now. Should be something more amuzing</div>
  );
};

export default CardsWidget;
