import Layout, { Main, H1 } from "../../components/layouts";
import Footer from "../../components/footer";
import { Messages, MsgForm } from "../../components/messages";

function Thread({ id }) {
  return (
    <Layout>
      <Main>
        <H1 name="Zadelis" slogan="На прокат бери - деньги береги."></H1>

        <Messages thread />
        <MsgForm />
      </Main>

      <Footer />
    </Layout>
  );
}

export default Thread;
