import LT from "../components/layouts";
import SearchBar from "../components/searchBar";
import CategoriesWidget from "../components/categoriesWidget";
import CardsWidget from "../components/cardsWidget";
import AboutZadelis from "../components/aboutZadelis";
import LoadMore from "../components/loadMore";
import Footer from "../components/footer";
import GetSocial from "../components/getSocial";

import { getData } from "../db";

export default function Home(props) {
  return (
    <LT.Layout>
      <LT.Main>
        <LT.H1
          data-testid="H1"
          name="Zadelis"
          slogan="На прокат бери - деньги береги."
        />
        <CategoriesWidget
          data-testid="cat-widget"
          categories={[
            "clothes",
            "tools",
            "electronics",
            "transport",
            "hobby",
            "business",
          ]}
        />
        <LT.Description>
          <article>
            <LT.H3>Это простой шаринг-сервис. 👍🏻</LT.H3>
            <div>
              Тут вы можете арендовать или сдать в аренду что-то хорошее.
              Арендуй поблизости 🧭. Зарабатывай 💵. Используй сейчас, не копи
              на покупку ⏳. Сдай вещь которая завалялась - это твой пассивный
              доход 🪙. Наш сервис поможет найти нужную вещь или сдать твою 🛍.
            </div>

            <div>
              У нас можно найти все от карнавальных костюмов 🎃 до недвижимости
              и готового бизнеса 🗃. Шеринг - (от англ. “share” - делиться) - это
              старый добрый прокат вещей со свежим подходом 🙌🏻. Вы сами
              устанавливаете условия 🧑🏼‍⚖️ аренды, а если вы арендатор - то вы
              видите эти условия заранее 🙈. На нашем сервисе есть система
              честных и непредвзятых отзывов ⭐️ от коммьюнити пользователей 👩🏼‍💻.
            </div>

            <div>
              Мы будем благодарны если вы дадите отзыв для этого сайта про
              какие-то недочеты или похвалите нас. Хоть немного 😃
              <br />
            </div>
            <span>
              C уважением,
              <br />
              Команда Zadelis
            </span>
          </article>
        </LT.Description>
        <SearchBar data-testid="searchbar" />
        <LT.H3 centered>Случайные объявления</LT.H3>
        <CardsWidget {...props} data-testid="cardsWidget" />
        <LoadMore data-testid="loadMore" />
        <div>
          Хотите прокатится на байдарке с друзьями на выходных? 🛶 нужен костюм
          на праздник 👘 ? Делаете мелкий ремонт и вам нужен инструмент на пару
          дней?🛠 Не покупайте вещь которой будете пользоваться нечасто 🗑,
          используйте Шеринг ❗️. Если у вас есть такая вещь , которой можно
          пользоваться - то сдавайте ее и зарабатывайте 💰. В нашем блоге мы
          расскажем как это сделать безопасно ⚠️ и хорошо. Сервис Zadelis -
          очень простая платформа бесплатных объявлений без рекламы 🆓 . Этот
          сервис сделан людьми для людей 👨‍👧‍👦. Все просто.
        </div>
        <div>
          Вы экономите свои деньги просто взяв нужную вещь напрокат 🤌🏼.
          Довольны вы - довольны владельцы. Возможно люди тут будут делиться
          своими вещами совершенно бесплатно или за символическую цену 🤨. Не
          ленитесь выкладывать свои вещи на Шеринг тут - не нужен телефон 📵 ,
          только email 📧. Люди которые хотят арендовать вашу вещь будут
          относится к ней как к своей и беречь ее 🤞🏻. Мы надеемся на это и
          описали все риски и как их можно минимизировать. Сайт все еще в
          процессе доработки 😅.
        </div>{" "}
      </LT.Main>

      <AboutZadelis data-testid="aboutZadelis" />

      <GetSocial data-testid="getSocial" />

      <LT.Centered>
        <LT.Description>
          <span>
            Если вы читаете это значит мы написали это не зря 😆. Нам бы очень
            хотелось чтобы вы рассказыали про нас своим друзьям и близским 📻.
            <span className="text-truncated">
              Возможно что именно такой сервис ищут многие 🤞🏻. Мы будем
              стараться чтобы он не приносил хлапот а вы получали ожидаемое! 🐯
            </span>
          </span>
        </LT.Description>
      </LT.Centered>
      <Footer />
    </LT.Layout>
  );
}

export async function getStaticProps() {
  try {
    const prokats = await getData("prokats", {}, false, 10);
    // a good candidate for helper function
    prokats.forEach((p) => (p._id = p._id.toString()));

    return {
      props: { prokats },
    };
  } catch (error) {
    return {
      props: { error: true },
    };
  }
}
