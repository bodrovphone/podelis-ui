import LT from "../../../components/layouts";
import Footer from "../../../components/footer";
import { Messages, MsgForm } from "../../../components/messages";
import GoBack from "../../../components/goBack";

function Thread({ id }) {
  return (
    <LT.Layout>
      <LT.Main>
        <LT.H1 name="Чат" size="2em" />
        <Messages />
        <MsgForm />
        <GoBack href="/messages">&lt;&lt; ко всем сообщениям</GoBack>
      </LT.Main>

      <Footer />
    </LT.Layout>
  );
}

export default Thread;
