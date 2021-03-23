import Layout, { Main, H1 } from "../components/layouts";
import Footer from "../components/footer";
import Form from "../components/form";

function AddForm({ data }) {
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

      <Footer />
    </Layout>
  );
}

export default AddForm;
