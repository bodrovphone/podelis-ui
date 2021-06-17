import Layout, { Main, H1, H2 } from "../../components/layouts";
import Footer from "../../components/footer";
import getData from "../../db";
import RenderBlog from "../../components/blog";

function Blog(props) {
  const { data } = props;
  return (
    <Layout>
      <Main>
        <H1 name="Zadelis" slogan="На прокат бери - деньги береги."></H1>
        <H2>{data.title}</H2>
        <RenderBlog {...props} />
      </Main>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  let data = await getData("blog", { slug: params.slug });
  return {
    props: {
      data: data[0],
    },
  };
}

export async function getStaticPaths() {
  let data = await getData("blog");
  const paths = data.map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export default Blog;
