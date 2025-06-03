import React, { useEffect, useState } from "react";
import ST from "./styles";
import SingleCard from "../singleCard";
// defaultTopPosts will be replaced with getStaticProps and fetch to API during build time
// when we have it on backend

interface CardsWidgetProps {
  prokats: any[];
  [key: string]: any; // For other props
}

const CardsWidget = ({ prokats, ...props }: CardsWidgetProps) => {
  //   {
  //     "_id" : ObjectId("610c4a598cfdd03251194582"),
  //     "title" : "Качественная машина",
  //     "description" : "Test test test test Test test test test Test test test test Test test test test Test test test test Test test test test Test test test test Test test test test Test test test test Test test test test Test test test test Test test test test Test test test test Test test test test Test test test test Test test test test Test test test test Test test test test",
  //     "price" : 123,
  //     "period" : 12,
  //     "units" : true,
  //     "conditions" : [
  //         "deposit",
  //         "terms"
  //     ],
  //     "deposit" : 5000,
  //     "pledge" : "",
  //     "imagesId" : "cffa7d2c-dd94-49a6-9291-070c63278163",
  //     "imagesCounter" : 2,
  //     "imgExt" : "png",
  //     "city" : "Днипро",
  //     "dateCreated" : "2021-08-05"
  // }

  if (prokats) {
    return (
      <ST.Cards {...props}>
        {prokats.map((prokat: any) => (
          <SingleCard prokat={prokat} key={prokat._id} />
        ))}
      </ST.Cards>
    );
  }

  return (
    // Now this is rendering when no posts saved for Favourites page
    <div>Just a placeholder for now. Should be something more amuzing</div>
  );
};

export default CardsWidget;
