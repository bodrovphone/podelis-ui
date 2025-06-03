import Image from 'next/image';

import LT from '../../components/layouts';
import Footer from '../../components/footer';
import ProkatGallery from '../../components/prokatGallery';
import ProkatDescription from '../../components/prokatDescription';
import Profile from '../../components/profile';
import ProkatDetails from '../../components/prokatDetails';
import ST from '../../components/prokatDetails/styles';
import ST_ from '../../components/singleCard/styles';
import ProkatTitle from '../../components/prokatTitle';

import { getData } from '../../db';
import { ObjectID } from 'mongodb';

const imageBaseUrl = process.env.NEXT_PUBLIC_CF_DOMAIN;

interface ProkatPageProps {
  prokat: any;
  error?: boolean;
  // Add other props if any, or use a more generic type like:
  // [key: string]: any;
}

const Prokat = (props: ProkatPageProps) => {
  // const router = useRouter();
  // const { id } = router.query;

  // Add fallback component here
  if (!props.prokat || props.error) {
    return <span>Fallback Component Goes here</span>;
  }

  const { prokat } = props;
  const { title, description, imagesId, imagesCounter, imgExt } = prokat;

  // getting number of images from db and generating array of urls
  const generateImageUrls = (id: any, num: number, ext: any): any[] => {
    return Array.from(Array(num).keys()).map((index: number) => ({
      original: `${imageBaseUrl}/${id}/${index}.${ext}`,
      thumbnail: `${imageBaseUrl}/${id}/${index}.${ext}`,
    }));
  };
  return (
    <LT.Layout>
      <LT.Main>
        <LT.H1 name="Podelis" slogan="На прокат бери - деньги береги."></LT.H1>
        <LT.TwoColumnsDesktop>
          <ProkatGallery
            images={generateImageUrls(imagesId, imagesCounter, imgExt)}
          />
          <ST_.Section>
            <ProkatTitle title={title} />
            <LT.TwoColumns>
              <div>
                <ProkatDetails {...prokat} />
              </div>
              <Profile _id="60fc8a4ddcff9692f32534dc" />
            </LT.TwoColumns>

            <ProkatDescription description={description} />

            <ST.ContactOwnerWrapper>
              <Image src="/img/chat.png" alt="Chat icon" width={75} height={75} />
              <Image src="/img/call.png" alt="Call icon" width={75} height={75} />
              <Image
                alt="Viber icon" // Added alt
                style={{ fill: 'red' }}
                src="/img/viber-icon-colored.svg"
                width={75}
                height={75}
              />
              <Image
                src="/img/telegram-icon-colored.svg"
                alt="Telegram icon" // Added alt
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

export async function getStaticPaths(): Promise<any> {
  try {
    const prokats: any[] = await getData('prokats', {}, true);
    const prokatRoutes = prokats.map((prokat: any) => ({
      params: { id: prokat._id.toString() },
    }));
    return {
      paths: prokatRoutes,
      fallback: 'blocking', // Changed to 'blocking'
    };
  } catch (error) {
    console.error("Failed to fetch prokat paths for getStaticPaths:", error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}

export async function getStaticProps({ params }: { params: any }): Promise<any> {
  try {
    const prokatArray: any[] = await getData('prokats', { _id: ObjectID(params.id) });
    if (!prokatArray || prokatArray.length === 0) {
      return { notFound: true };
    }
    const prokat: any = prokatArray[0];
    prokat.id = prokat._id.toString();
    delete prokat._id;

    return {
      props: { prokat },
      revalidate: 60, // Optional: revalidate every 60 seconds
    };
  } catch (error: any) {
    console.error("Failed to fetch prokat for id:", params.id, error);
    return { notFound: true }; // Changed to notFound
  }
}

export default Prokat;
