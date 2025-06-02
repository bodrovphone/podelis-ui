import LT from "../../../components/layouts";
import Footer from "../../../components/footer";
import { Messages, MsgForm } from "../../../components/messages";
import GoBack from "../../../components/goBack";

interface ThreadProps {
  id: any; // Or a more specific type if known, e.g., string | number
}

function Thread({ id }: ThreadProps) {
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
