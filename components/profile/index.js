import React from 'react';
import { ProfileWrapper, Avatar, Name } from './styles';
import StarRatings from 'react-star-ratings';

const ProfileDetails = ({name, avatarUrl = 'http://www.gravatar.com/avatar/?d=mp', rating }) => (
  <ProfileWrapper>
    <StarRatings
      rating={rating}
      starRatedColor="gold"
      numberOfStars={5}
      name='rating'
      starDimension="10px"
      starSpacing=".5px"
      />
    <Avatar src={avatarUrl} />
    <Name>{name}</Name>
  </ProfileWrapper>
)

export default ProfileDetails;