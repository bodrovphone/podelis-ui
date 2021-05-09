import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { GeoAlt, Cash, Bookmarks, BookmarksFill } from "react-bootstrap-icons";

import { CardWrapper, CardDetails, CardImage, CardTitle } from "./styles";

const SingleCard = ({ id, imageSrc, title, details }) => {
  // I only need randomizer and MyBook for styling purpose

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
    <CardWrapper>
      <Link href={`/prokat/${id}`}>
        <a>
          <CardImage>
            <img src={imageSrc}></img>
          </CardImage>
          <CardTitle>{title}</CardTitle>
          <CardDetails>
            <div className="price">
              <Cash />
              300грн/день
            </div>
            <div className="location-bookmark">
              <GeoAlt />
              <div className="location">Днепр</div>
              {MyBook}
            </div>
          </CardDetails>
        </a>
      </Link>
    </CardWrapper>
  );
};

SingleCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
};

export default SingleCard;
