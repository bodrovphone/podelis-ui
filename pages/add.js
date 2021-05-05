import Layout, { Main, H1 } from "../components/layouts";
import Footer from "../components/footer";
import Form from "../components/form";

function AddForm({ data }) {
  return (
    <Layout>
      <Main>
        <H1 name="Zadelis" slogan="На прокат бери - деньги береги."></H1>

        <Form />
      </Main>

      <Footer />
    </Layout>
  );
}

export default AddForm;
