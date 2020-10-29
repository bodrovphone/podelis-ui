import Layout, { Main, H1, Description, Centered } from "../components/layouts";
import SearchBar from "../components/searchBar";
import CategoriesWidget from "../components/categoriesWidget";
import CardsWidget from "../components/cardsWidget";
import AboutZadelis from "../components/aboutZadelis";
import LoadMore from "../components/loadMore";
import Footer from "../components/footer";
import GetSocial from "../components/getSocial";

export default function Home(props) {
  return (
    <Layout>
      <Main>
        <H1>
          <div>Zadelis</div>
          <span>На прокат бери - деньги береги.</span>
          {/*укр: В оренду забирай - грошi зберiгай. */}
        </H1>

        <CategoriesWidget
          categories={[
            "clothes",
            "tools",
            "electronics",
            "transport",
            "hobby",
            "business",
          ]}
        />

        <Description>
          <span>
            Простой и удобный шаринг-сервис для тебя. Арендуй поблизости.
            Пользуйся тем что нужно, не покупая. Тут возможно еще текст - более
            развернутый...
            <span className="text-truncated">
              возможно при клике или при ховере суть в том чтобы на фоне
              поставить заманчивую картинку и ... чтобы текст интриговал
            </span>
          </span>
        </Description>

        <p>Тут у меня будут thumbnails с картинками основных категорий ?</p>

        <p>
          Тут у меня будет форма поиска И возможно когда на нее ставится фокус
          она поднимается вверх а еще я хочу эту хрень которая самописная в
          инпут, да? Или эту хрень поставить выше под описанием сервиса? Вот вот
          я уже начал думать, неплохо
        </p>

        <SearchBar />

        <CardsWidget {...props} posts={[1, 2, 3]} />
        <LoadMore />
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          reMaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </Main>

      <AboutZadelis />

      <GetSocial />

      <Centered>
        <Description>
          <span>
            Простой и удобный шаринг-сервис для тебя. Арендуй поблизости.
            Пользуйся тем что нужно, не покупая. Тут возможно еще текст - более
            развернутый...
            <span className="text-truncated">
              возможно при клике или при ховере суть в том чтобы на фоне
              поставить заманчивую картинку и ... чтобы текст интриговал
            </span>
          </span>
        </Description>
      </Centered>
      <Footer />
    </Layout>
  );
}
