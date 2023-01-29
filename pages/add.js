import LT from '../components/layouts';
import Footer from '../components/footer';
import Form from '../components/form';

function AddForm({ data }) {
  return (
    <LT.Layout>
      <LT.Main>
        <LT.H1 name="Podelis" slogan="На прокат бери - деньги береги." />

        <Form data-testId="form" />
      </LT.Main>

      <Footer />
    </LT.Layout>
  );
}

export default AddForm;
