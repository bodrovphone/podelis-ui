import Layout, { Main, H1 } from "../../components/layouts";
import Footer from "../../components/footer";
import { Messages, MsgForm } from "../../components/messages";

function Thread({ id }) {
  return (
    <Layout>
      <Main>
        <H1>
          <div>Zadelis</div>
          <span>На прокат бери - деньги береги.</span>
          {/*укр: В оренду забирай - грошi зберiгай. */}
        </H1>

        <Messages thread />
        <MsgForm />
      </Main>

      <Footer />
    </Layout>
  );
}

export default Thread;
