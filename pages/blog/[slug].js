import LT from '../../components/layouts';
import Footer from '../../components/footer';
import { getData } from '../../db';
import RenderBlog from '../../components/blog';

function Blog(props) {
  const { data } = props;
  return (
    <LT.Layout>
      <LT.Main>
        <LT.H1 name="Podelis" slogan="На прокат бери - деньги береги."></LT.H1>
        <LT.H2>{data.title}</LT.H2>
        <RenderBlog {...props} />
      </LT.Main>
      <Footer />
    </LT.Layout>
  );
}

export async function getStaticProps({ params }) {
  let data = await getData('blog', { slug: params.slug });
  data.forEach((item) => {
    delete item._id;
  });
  return {
    props: {
      data: data[0],
    },
  };
}

export async function getStaticPaths() {
  let data = await getData('blog');
  const paths = data.map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export default Blog;
