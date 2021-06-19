import LT from "../../components/layouts";
import Footer from "../../components/footer";
import { Messages } from "../../components/messages";

function Thread({ id }) {
  return (
    <LT.Layout>
      <LT.Main>
        <LT.H1 name="Мои Сообщения" size="2em" />
        <Messages thread links />
      </LT.Main>
      <Footer />
    </LT.Layout>
  );
}

export default Thread;
