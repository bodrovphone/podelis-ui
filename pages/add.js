import LT from "../components/layouts";
import Footer from "../components/footer";
import Form from "../components/form";

function AddForm({ data }) {
  return (
    <LT.Layout>
      <LT.Main>
        <LT.H1 name="Zadelis" slogan="На прокат бери - деньги береги." />

        <Form />
      </LT.Main>

      <Footer />
    </LT.Layout>
  );
}

export default AddForm;
