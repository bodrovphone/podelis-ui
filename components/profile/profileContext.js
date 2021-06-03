import CardsWidget from "../cardsWidget";
import Settings from "../settings";
import { H2 } from "../layouts";

const ProfileContext = (props) => {
  return (
    <div>
      <div>
        <H2>Мои объявления</H2>
        <CardsWidget {...props} own={true} />
      </div>
      <div>
        <H2>Настройки</H2>
        <Settings />
      </div>
    </div>
  );
};

export default ProfileContext;
