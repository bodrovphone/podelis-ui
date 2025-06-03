import * as React from "react";
import ST from "./styles";
import StarRatings from "react-star-ratings";
import ProfileContext from "./profileContext";
import ProfileEditable from "./profileEditable";
// import ReactTooltip from "react-tooltip"; // Old v4 import
import dynamic from 'next/dynamic';

const Tooltip = dynamic(() => import('react-tooltip').then(mod => mod.Tooltip), { ssr: false });

interface ProfileDetailsProps {
  avatarUrl?: string;
  _id?: any;
  name?: any;
  rating?: any;
}

interface ProfileState {
  name: string;
  rating: number;
  registered: string;
}

const ProfileDetails = (props: ProfileDetailsProps) => {
  const { avatarUrl = "http://www.gravatar.com/avatar/?d=mp", _id, name: initialName, rating: initialRating } = props;

  const [state, setState] = React.useState<ProfileState>({
    name: initialName || "Гражданин",
    rating: initialRating || 0, // Default to 0 if no rating, or 5 if you prefer
    registered: "2021-03-12", // This probably should come from fetched data or be cleared
  });
  const [isClient, setIsClient] = React.useState(false);

  const { name, rating, registered } = state; // Add this line back

  React.useEffect(() => {
    setIsClient(true);
    const fetchAuthorDetails = async () => {
      if (!_id) { // Only fetch if _id is provided
        if (initialName) setState(prevState => ({...prevState, name: initialName, rating: initialRating || 0}));
        return;
      }
      try {
        // it should be taken from props.prokat.id later on , when each prokat contains author
        const authorDetailsJSON: any = await fetch(`/api/getAuthor?user=${_id}`);
        const { name: fetchedName, rating: fetchedRating, registered: fetchedRegistered }: ProfileState = await authorDetailsJSON.json();
        setState({ // Set all fetched data
          name: fetchedName,
          rating: fetchedRating,
          registered: fetchedRegistered,
        });
      } catch (error: any) {
        console.log("error in authorDetails", error);
        // Potentially set state to reflect error or defaults
        if (initialName) setState(prevState => ({...prevState, name: initialName, rating: initialRating || 0, registered: "N/A"}));
        else setState(prevState => ({...prevState, name: "Error", rating: 0, registered: "N/A"}));
      }
    };
    fetchAuthorDetails();
  }, [_id, initialName, initialRating]); // Depend on _id and initial props if they change

  return (
    <ST.ProfileWrapper>
      {rating > 0 ? ( // Show stars only if rating is positive
        <StarRatings
          rating={rating}
          starRatedColor="gold"
          numberOfStars={5}
          name="rating"
          starDimension="10px"
          starSpacing=".5px"
        />
      ) : (
        <div style={{ height: '10px' }}> {/* Placeholder for spacing if no stars */}
          {/* Optionally render placeholder or nothing */}
        </div>
      )}
      <ST.AvatarImage
        src={avatarUrl}
        data-tooltip-id="profile-avatar-tooltip"
        data-tooltip-content={`на сайте с ${registered}`}
      />
      {isClient && <Tooltip id="profile-avatar-tooltip" variant="info" delayShow={400} />}

      <ST.Name>{name}</ST.Name>
    </ST.ProfileWrapper>
  );
};

export default ProfileDetails;
export { ProfileContext, ProfileEditable };
