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
    return [...Array(num).keys()].map((index: number) => ({
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
              <Image src="/img/chat.png" width={75} height={75} />
              <Image src="/img/call.png" width={75} height={75} />
              <Image
                styles={{ fill: 'red' }}
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

export async function getStaticPaths(): Promise<any> {
  const prokats: any[] = await getData('prokats', {}, true);
  const prokatRoutes = prokats.map((prokat: any) => ({
    params: { id: prokat._id.toString() },
  }));
  return {
    paths: prokatRoutes,
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: any }): Promise<any> {
  try {
    const prokatArray: any[] = await getData('prokats', { _id: ObjectID(params.id) });
    const prokat: any = prokatArray[0];
    prokat.id = prokat._id.toString();
    delete prokat._id;

    return {
      props: { prokat },
    };
  } catch (error: any) {
    return {
      props: { error: true },
    };
  }
}

export default Prokat;
