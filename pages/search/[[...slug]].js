import Layout, { Main, H1 } from "../../components/layouts";
import SearchBar from "../../components/searchBar";
import SearchFilters from "../../components/searchFilters";
import CardsWidget from '../../components/cardsWidget';
import { VCentered_ST } from '../../components/layouts';

export default function Search(props) {
  return (
    <Layout>
      <Main>
        <H1>
          <div>Zadelis</div>
          <span>На прокат бери - деньги береги.</span>
          {/*укр: В оренду забирай - грошi зберiгай. */}
        </H1>
        <SearchBar />
        <SearchFilters />
        <VCentered_ST>
         <CardsWidget {...props} posts={[1, 2, 3]} />
        </VCentered_ST>
      </Main>
    </Layout>
  );
}





// posts will be populated at build time by getStaticProps()

/*
function Blog({ data }) {
  return (
    <div>
      <h1>Тут будет страница поиска</h1>
      <ul>
        {Object.keys(data).map((item) => {
          return <li>{data[item]}</li>;
        })}
      </ul>
    </div>
  );
}
*/

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.

/*
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const fetch = require("node-fetch");

  const res = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  const data = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  };
}

export default Blog;
*/
