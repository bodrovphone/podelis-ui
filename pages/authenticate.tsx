import LT from '../components/layouts';
import Form from '../components/authenticateForm';

export default function Home(props: any) {
  return (
    <LT.Layout>
      <LT.Main>
        <LT.H1 name="Podelis" slogan="На прокат бери - деньги береги."></LT.H1>
        <Form />
      </LT.Main>
    </LT.Layout>
  );
}
