import Layout, { Main, H1 } from "../components/layouts";
import Form from "../components/authenticateForm";

export default function Home(props) {
  return (
    <Layout>
      <Main>
        <H1>
          <div>Zadelis</div>
          <span>На прокат бери - деньги береги.</span>
          {/*укр: В оренду забирай - грошi зберiгай. */}
        </H1>
        <Form />
      </Main>
    </Layout>
  );
}
