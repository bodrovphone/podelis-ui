import Layout, { Main, H1 } from "../components/layouts";
import Footer from "../components/footer";
import CardsWidget from "../components/cardsWidget";
import Tabs from "../components/tabs";
import FavSearches from "../components/favSearches";

const Favourites = ({ data }) => {
  return (
    <Layout>
      <Main>
        <H1 name="Zadelis" slogan="На прокат бери - деньги береги."></H1>

        <Tabs>
          <div label="Штуки">
            <CardsWidget />
          </div>
          <div label="Поиски">
            <FavSearches
              queries={[
                { label: "джинсы", tags: ["clothes"] },
                { label: "катамараны", tags: ["hobbies", "sport"] },
                { label: "отвертка", tags: ["instruments"] },
              ]}
            />
          </div>
        </Tabs>
      </Main>

      <Footer />
    </Layout>
  );
};

export default Favourites;
