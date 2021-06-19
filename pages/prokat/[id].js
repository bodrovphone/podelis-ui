import { useRouter } from "next/router";
import Image from "next/image";

import LT from "../../components/layouts";
import Footer from "../../components/footer";
import ProkatGallery from "../../components/prokatGallery";
import ProkatDescription from "../../components/prokatDescription";
import Profile from "../../components/profile";
import ProkatDetails from "../../components/prokatDetails";
import ST from "../../components/prokatDetails/styles";
import ST_ from "../../components/singleCard/styles";
import ProkatTitle from "../../components/prokatTitle";

const Prokat = (props) => {
  const router = useRouter();
  const { id } = router.query;
  console.log("date from props: ", props.date);
  console.log("id from router: ", id);

  // this will run if used altogether with getStaticPaths + getStaticProps
  // if (router.isFallback) {
  //   return <div>Загружаю...</div>
  // }

  return (
    <LT.Layout>
      <LT.Main>
        <LT.H1 name="Zadelis" slogan="На прокат бери - деньги береги."></LT.H1>
        <LT.TwoColumnsDesktop>
          <ProkatGallery />
          <ST_.Section>
            <ProkatTitle title="Проектор XIAOMI Mi Smart mini Projector" />
            <LT.TwoColumns>
              <div>
                <ProkatDetails price="300грн/день" location="Днепр" />
              </div>
              <Profile name="Вася" rating={3.9} />
            </LT.TwoColumns>

            <ProkatDescription description="Прекрасный проектор для просмотра фильмов с друзъями. Предлогаем разные модели. Простой в управлении. 4k качество ктор для просмотра фильмов с друзъями. Предлогактор для просмотра фильмов с друзъями. Прекрасный проектор для просмотра фильмов с друзъями. Предлогаем разные модели. Простой в управлении. 4k качество ктор для просмотра фильмов с друзъями. Предлогактор для просмотра фильмов с друзъями." />

            <ST.ContactOwnerWrapper>
              <Image src="/img/chat.png" width={75} height={75} />
              <Image src="/img/call.png" width={75} height={75} />
              <Image
                styles={{ fill: "red" }}
                src="/img/viber-icon-colored.svg"
                width={75}
                height={75}
              />
              <Image
                src="/img/telegram-icon-colored.svg"
                width={75}
                height={75}
              />
            </ST.ContactOwnerWrapper>
          </ST_.Section>
        </LT.TwoColumnsDesktop>
      </LT.Main>

      <Footer />
    </LT.Layout>
  );
};

// export async function getStaticPaths() {
//   return {
//     paths:
//       [
//         { params: { id: '90' } },
//         { params: { id: '91' } },
//         { params: { id: '92' } }
//     ],
//     fallback: true,
//   }
// }

// export async function getStaticProps({ params }) {
//   return {
//     props: { prokat: params.id || 'test' }
//   }
// }

export async function getServerSideProps(context) {
  return {
    props: { date: new Date().toISOString() },
  };
}

export default Prokat;
