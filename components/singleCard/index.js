import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { GeoAlt, Cash, Bookmarks, BookmarksFill } from "react-bootstrap-icons";
import Image from "next/image";

import ST from "./styles";

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
    <ST.CardWrapper>
      <Link href={`/prokat/${id}`}>
        <a>
          <ST.CardImage>
            <Image
              src="/img/sample_product_image.webp"
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

SingleCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
};

export default SingleCard;
