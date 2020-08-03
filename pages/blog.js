// posts will be populated at build time by getStaticProps()
function Blog({ data }) {
  return (
    <div>
      <h1>Test Blog</h1>
      <ul>
        {
          Object.keys(data)
            .map(item => {
              return <li>{data[item]}</li>
            })
        }
      </ul>
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library


  const fetch = require('node-fetch');

  const res = await fetch('https://jsonplaceholder.typicode.com/todos/2');
  const data = await res.json();


  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  }
}

export default Blog