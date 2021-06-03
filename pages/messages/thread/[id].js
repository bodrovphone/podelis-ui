import Layout, { Main, H1 } from "../../../components/layouts";
import Footer from "../../../components/footer";
import { Messages, MsgForm } from "../../../components/messages";
import GoBack from "../../../components/goBack";

function Thread({ id }) {
  return (
    <Layout>
      <Main>
        <H1 name="Чат" size="2em" />
        <Messages />
        <MsgForm />
        <GoBack href="/messages">&lt;&lt; ко всем сообщениям</GoBack>
      </Main>

      <Footer />
    </Layout>
  );
}

export default Thread;
