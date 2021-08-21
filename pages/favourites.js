import LT from "../components/layouts";
import Footer from "../components/footer";
import CardsWidget from "../components/cardsWidget";
import Tabs from "../components/tabs";
import FavSearches from "../components/favSearches";

import { useFetch } from "../utils/hooks";

// I am not sure if it's even possible to render bookmarks on the server with getServerProps or something - because I would need to know if a authentication is made for a user before I can get those
// much easier to do that on client.
const Favourites = () => {
  const { loading, error, data } = useFetch("/api/getProkats");
  return (
    <LT.Layout>
      <LT.Main>
        <LT.H1 name="Zadelis" slogan="На прокат бери - деньги береги."></LT.H1>

        <Tabs data-testId="tabs">
          <div label="Штуки">
            <CardsWidget prokats={data} />
          </div>
          <div label="Поиски">
            <FavSearches
              data-testId="favSearches"
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
