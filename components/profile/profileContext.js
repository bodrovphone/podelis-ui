import CardsWidget from "../cardsWidget";
import Settings from "../settings";
import LT from "../layouts";

const ProfileContext = (props) => {
  return (
    <div>
      <div>
        <LT.H2>Мои объявления</LT.H2>
        <CardsWidget {...props} />
      </div>
      <div>
        <LT.H2>Настройки</LT.H2>
        <Settings />
      </div>
    </div>
  );
};

export default ProfileContext;
