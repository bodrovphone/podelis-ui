import LT from "../components/layouts";
import { ProfileEditable, ProfileContext } from "../components/profile";

import Footer from "../components/footer";

export default function Home(props) {
  return (
    <LT.Layout>
      <LT.Main>
        <LT.H1 name="Zadelis" slogan="На прокат бери - деньги береги."></LT.H1>
        <LT.TwoColumnsWrap>
          <ProfileEditable name="Василий" />
          <ProfileContext />
        </LT.TwoColumnsWrap>
      </LT.Main>
      <Footer />
    </LT.Layout>
  );
}
