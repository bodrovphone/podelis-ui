import * as React from "react";
import ST from "./styles";
import StarRatings from "react-star-ratings";
import ProfileContext from "./profileContext";
import ProfileEditable from "./profileEditable";
import ReactTooltip from "react-tooltip";

interface ProfileDetailsProps {
  avatarUrl?: string;
  _id: any; // Or string | number if known
}

interface ProfileState {
  name: string;
  rating: number;
  registered: string;
}

const ProfileDetails = ({
  avatarUrl = "http://www.gravatar.com/avatar/?d=mp",
  _id,
}: ProfileDetailsProps) => {
  const [state, setState] = React.useState<ProfileState>({
    name: "Гражданин",
    rating: 5,
    registered: "2021-03-12",
  });

  const { name, rating, registered } = state;

  React.useEffect(() => {
    const fetchAuthorDetails = async () => {
      try {
        // it should be taken from props.prokat.id later on , when each prokat contains author
        const authorDetailsJSON: any = await fetch(`/api/getAuthor?user=${_id}`);
        const { name, rating, registered }: ProfileState = await authorDetailsJSON.json();
        setState({
          name,
          rating,
          registered,
        });
      } catch (error: any) {
        console.log("error in authorDetails", error);
      }
    };
    fetchAuthorDetails();
  }, [_id]); // Added _id to dependency array

  return (
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
      <ST.AvatarImage src={avatarUrl} data-tip={`на сайте с ${registered}`} />
      <ReactTooltip type="info" delayShow={400} />

      <ST.Name>{name}</ST.Name>
    </ST.ProfileWrapper>
  );
};

export default ProfileDetails;
export { ProfileContext, ProfileEditable };
