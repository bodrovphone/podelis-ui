import Layout, { Main, H1 } from "../components/layouts";
import Form from "../components/authenticateForm";

export default function Home(props) {
  return (
    <Layout>
      <Main>
        <H1 name="Zadelis" slogan="На прокат бери - деньги береги."></H1>
        <Form />
      </Main>
    </Layout>
  );
}
