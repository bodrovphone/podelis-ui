import { useRouter } from 'next/router'

import Layout, { Main, H1, Description, Centered } from '../../components/layouts';
import SingleCard from '../../components/singleCard';
import Footer from '../../components/footer';
import ProkatGallery from '../../components/prokatGallery';

const Prokat = (props) => {
  const router = useRouter();
  const { id } = router.query;
  console.log( id );
  return (
    <Layout>
      <Main>
        <H1>
          <div>
            Zadelis
          </div>
          <span>На прокат бери - деньги береги.</span>
          {/*укр: В оренду забирай - грошi зберiгай. */}
        </H1>

        <ProkatGallery />
        
        <h2>Проектор XIAOMI Mi Smart mini Projector</h2>

        <div>
          Прекрасный проектор для просмотра фильмов с друзъями. Предлогаем разные модели. Простой в управлении. 4k качество ктор для просмотра фильмов с друзъями. Предлогактор для просмотра фильмов с друзъями.
        </div>

        {/* <SingleCard title="Проектор Xiomi sdfsdfpwj efpwiejf wfjw р Xiomi sdfsdf pwjefpw iejf w" description="Прекрасный проектор для просмотра фильмов с друзъями. Предлогаем разные модели. Простой в управлении. 4k качество ктор для просмотра фильмов с друзъями. Предлогактор для просмотра фильмов с друзъями. Предлога" imageSrc="https://images.ua.prom.st/2139978779_w640_h640_proektor-xiaomi-mi.jpg" id="fdsfks9werksdf" key={'props.posts[1]'} /> */}
        
      </Main>

      <Footer />
    </Layout>
  );
}

export default Prokat;