import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { CardWrapper, CardDetails, CardImage, CardTitle } from './styles';

const SingleCard = ({id, imageSrc, title, description }) => (
  <CardWrapper>
    <Link href={`/post/${id}`}>
      <a>
        <CardTitle>
          {title}
        </CardTitle>
        <CardImage>
          <img src={imageSrc}></img>
        </CardImage>
        <CardDetails>
          <div>
            {description}
          </div>
        </CardDetails>
      </a>
    </Link>
  </CardWrapper>
);

SingleCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string
};

export default SingleCard;