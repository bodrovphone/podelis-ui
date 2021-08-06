import React from "react";
import Link from "next/link";
import { GeoAlt, Cash, Bookmarks, BookmarksFill } from "react-bootstrap-icons";
import Image from "next/image";

import ST from "./styles";

const SingleCard = ({ prokat }) => {
  // I only need randomizer and MyBook for styling purpose
  const { _id, title, imagesId, imgExt, imagesCounter } = prokat;

  const randomizer = Math.floor(Math.random() * 2) + 1;
  const MyBook =
    randomizer > 1 ? (
      <Bookmarks
        onClick={(e) => {
          e.preventDefault();
          console.log("keep me in bookmarks");
        }}
        className="bookmark"
        size={20}
        color="royalblue"
      />
    ) : (
      <BookmarksFill
        onClick={(e) => {
          e.preventDefault();
          console.log("keep me in bookmarks");
        }}
        className="bookmark"
        size={20}
        color="royalblue"
      />
    );

  return (
    <ST.CardWrapper>
      <Link href={`/prokat/${_id}`}>
        <a>
          <ST.CardImage>
            <Image
              // This is a good candidate for helper function - used very often
              src={
                imagesCounter
                  ? `${process.env.NEXT_PUBLIC_CF_DOMAIN}/${imagesId}/0.${imgExt}`
                  : "/img/no_image.png"
              }
              width="100%"
              height="100%"
              layout="responsive"
              priotiy="true"
            />
          </ST.CardImage>
          <ST.CardTitle>{title}</ST.CardTitle>
          <ST.CardDetails>
            <div className="price">
              <Cash />
              300грн/день
            </div>
            <div className="location-bookmark">
              <GeoAlt />
              <div className="location">Днепр</div>
              {MyBook}
            </div>
          </ST.CardDetails>
        </a>
      </Link>
    </ST.CardWrapper>
  );
};

export default SingleCard;
