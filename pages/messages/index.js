import Layout, { Main, H1, H2 } from "../../components/layouts";
import Footer from "../../components/footer";
import { Messages } from "../../components/messages";

function Thread({ id }) {
  return (
    <Layout>
      <Main>
        <H1 name="Мои Сообщения" size="2em" />
        <Messages thread links />
      </Main>
      <Footer />
    </Layout>
  );
}

export default Thread;
