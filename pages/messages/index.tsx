import LT from "../../components/layouts";
import Footer from "../../components/footer";
import { Messages } from "../../components/messages";

interface MessagesIndexPageProps {
  id: any; // Or a more specific type if known, e.g., string | number
}

function MessagesIndexPage({ id }: MessagesIndexPageProps) {
  return (
    <LT.Layout>
      <LT.Main>
        <LT.H1 name="Мои Сообщения" slogan="" size="2em" />
        <Messages thread links />
      </LT.Main>
      <Footer />
    </LT.Layout>
  );
}

export default MessagesIndexPage;
