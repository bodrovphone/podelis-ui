import Layout, { Main, H1, H2 } from "../components/layouts";
import Footer from "../components/footer";
import Sitemap from "../components/sitemap";

function AddForm({ data }) {
  return (
    <Layout>
      <Main>
        <H1 name="Zadelis" slogan="На прокат бери - деньги береги."></H1>

        <H2>Карта сайта</H2>

        <Sitemap
          labelMain="Основные"
          labelSecondary="Категории"
          links={[
            { name: "Главная", url: "/" },
            { name: "Закладки", url: "/favourites" },
            { name: "Добавить", url: "/add" },
            { name: "Поиск", url: "/search" },
            {
              name: "Профиль",
              url: "/profile",
              sub: [
                {
                  name: "Мои объявления",
                  url: "/profile",
                },
                {
                  name: "Сообщения",
                  url: "/profile",
                },
                {
                  name: "Настройки",
                  url: "/profile",
                },
                {
                  name: "Сброс пароля",
                  url: "/profile",
                },
              ],
            },
            { name: "Сообщения", url: "/messages" },
            { name: "Правила и Условия", url: "/privacy-policy" },
            { name: "О нас", url: "/about" },
            { name: "Блог", url: "/blog" },
          ]}
          categories={[
            { name: "Одежда", url: "/search/clothes", offers: 25 },
            { name: "Инструмент", url: "/search/tools", offers: 11 },
            { name: "Техника", url: "/search/electronics", offers: 32 },
            { name: "Транспорт", url: "/search/transport", offers: 2 },
            { name: "Бизнес", url: "/search/business", offers: 4 },
            { name: "Хобби", url: "/search/hobbies", offers: 3 },
            { name: "Игрушки", url: "/search/toys", offers: 11 },
            { name: "Недвижимость", url: "/search/estate", offers: 5 },
            { name: "Декор", url: "/search/decorators", offers: 2 },
            { name: "Детски Мир", url: "/search/forKids", offers: 1 },
          ]}
        />
      </Main>

      <Footer />
    </Layout>
  );
}

export default AddForm;
