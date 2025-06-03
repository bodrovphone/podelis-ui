import LT from '../../components/layouts';
import Footer from '../../components/footer';
import { getData } from '../../db';
import RenderBlog from '../../components/blog';

interface BlogProps {
  data: any;
  // Add other props if any, or use a more generic type like:
  // [key: string]: any;
}

function Blog(props: BlogProps) {
  const { data } = props;

  if (!data) {
    // This can be a more sophisticated error/fallback component
    return (
      <LT.Layout>
        <LT.Main>
          <LT.H1 name="Podelis" slogan="На прокат бери - деньги береги."></LT.H1>
          <LT.H2>Пост не найден</LT.H2>
          <p>Извините, этот пост не удалось загрузить или он не существует.</p>
        </LT.Main>
        <Footer />
      </LT.Layout>
    );
  }

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

export async function getStaticProps({ params }: { params: any }): Promise<any> {
  try {
    let data: any[] = await getData('blog', { slug: params.slug });
    if (!data || data.length === 0) {
      return { notFound: true };
    }
    data.forEach((item: any) => {
      delete item._id;
    });
    return {
      props: {
        data: data[0],
      },
      revalidate: 60, // Optional: revalidate every 60 seconds
    };
  } catch (error) {
    console.error("Failed to fetch blog post for slug:", params.slug, error);
    return { notFound: true };
  }
}

export async function getStaticPaths(): Promise<any> {
  try {
    let data: any[] = await getData('blog');
    const paths = data.map(({ slug }: { slug: any }) => ({ params: { slug } }));
    return { paths, fallback: 'blocking' }; // Changed fallback to 'blocking'
  } catch (error) {
    console.error("Failed to fetch blog paths for getStaticPaths:", error);
    return { paths: [], fallback: 'blocking' };
  }
}

export default Blog;
