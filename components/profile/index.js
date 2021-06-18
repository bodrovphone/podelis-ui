import React from "react";
import ST from "./styles";
import StarRatings from "react-star-ratings";
import ProfileContext from "./profileContext";
import ProfileEditable from "./profileEditable";
import ReactTooltip from "react-tooltip";

const ProfileDetails = ({
  name,
  avatarUrl = "http://www.gravatar.com/avatar/?d=mp",
  rating,
}) => (
  <ST.ProfileWrapper>
    {rating ? (
      <StarRatings
        rating={rating}
        starRatedColor="gold"
        numberOfStars={5}
        name="rating"
        starDimension="10px"
        starSpacing=".5px"
      />
    ) : (
      <div style={{ visibility: "hidden" }}>
        <StarRatings
          rating={rating}
          starRatedColor="gold"
          numberOfStars={5}
          name="rating"
          starDimension="10px"
          starSpacing=".5px"
          style={{ visibility: "hidden" }}
        />
      </div>
    )}
    <ST.AvatarImage src={avatarUrl} data-tip="на сайте с Апреля 2021" />
    <ReactTooltip type="info" delayShow={700} />

    <ST.Name>{name}</ST.Name>
  </ST.ProfileWrapper>
);

export default ProfileDetails;
export { ProfileContext, ProfileEditable };
