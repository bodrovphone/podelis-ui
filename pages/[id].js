import { useRouter } from 'next/router'


// posts will be populated at build time by getStaticProps()
function Test({ test }) {

  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>Test {id}</h1>
      <h2>If you see a word test here: {test}, then this is fucking working</h2>
    </div>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps({params}) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library


  const sleep = require('util').promisify(setTimeout)

  await sleep(params.id);

  const myNumber = Math.ceil(Math.random() * 10)

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {test: String(myNumber)}
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '500' } }, // See the "paths" section below
      { params: { id: '2000' } } // See the "paths" section below
    ],
    fallback: false // See the "fallback" section below
  };
}

export default Test