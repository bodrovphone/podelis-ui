import { Posts_ST, Messages_ST, Settings_ST } from "./styles";

import CardsWidget from "../cardsWidget";
import Messages from "../messages";
import Settings from "../settings";

import { H2 } from "../layouts";

import theme from "../styles/theme";

import { Camera, Pencil } from "react-bootstrap-icons";

const ProfileContext = (props) => {
  return (
    <div>
      <Posts_ST>
        <H2>Мои объявления</H2>
        <CardsWidget {...props} own={true} />
      </Posts_ST>
      <Messages_ST>
        <H2>Сообщения</H2>
        <Messages />
      </Messages_ST>
      <Settings_ST>
        <H2>Настройки</H2>
        <Settings />
      </Settings_ST>
    </div>
  );
};

export default ProfileContext;
