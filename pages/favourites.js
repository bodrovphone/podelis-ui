import LT from "../components/layouts";
import Footer from "../components/footer";
import CardsWidget from "../components/cardsWidget";
import Tabs from "../components/tabs";
import FavSearches from "../components/favSearches";

const Favourites = ({ data }) => {
  return (
    <LT.Layout>
      <LT.Main>
        <LT.H1 name="Zadelis" slogan="На прокат бери - деньги береги."></LT.H1>

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
      </LT.Main>

      <Footer />
    </LT.Layout>
  );
};

export default Favourites;
