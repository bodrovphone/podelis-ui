import Layout, { Main, H1, H2, H3, UL } from "../../components/layouts";
import Footer from "../../components/footer";
import getData from "../../db";

function Blog(props) {
  const { data } = props;
  return (
    <Layout>
      <Main>
        <H1 name="Zadelis" slogan="На прокат бери - деньги береги."></H1>

        <H2>{data.title}</H2>
        <H3>{data.subTitle}</H3>

        <p>{data.text}</p>
      </Main>

      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  let data = await getData("blogs", { slug: params.slug });
  return {
    props: {
      data: data[0],
    },
  };
}

export async function getStaticPaths() {
  let data = await getData("blogs");
  const paths = data.map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export default Blog;
