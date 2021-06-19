import LT from "../components/layouts";
import Form from "../components/authenticateForm";

export default function Home(props) {
  return (
    <LT.Layout>
      <LT.Main>
        <LT.H1 name="Zadelis" slogan="На прокат бери - деньги береги."></LT.H1>
        <Form />
      </LT.Main>
    </LT.Layout>
  );
}
