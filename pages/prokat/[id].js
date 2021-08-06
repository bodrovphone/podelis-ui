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

import { getData } from "../../db";
import { ObjectID } from "mongodb";

const imageBaseUrl = process.env.NEXT_PUBLIC_CF_DOMAIN;

const Prokat = (props) => {
  // const router = useRouter();
  // const { id } = router.query;

  // Add fallback component here
  if (!props.prokat || props.error) {
    return <span>Fallback Component Goes here</span>;
  }

  const { prokat } = props;
  const { title, description, imagesId, imagesCounter, imgExt } = prokat;

  // getting number of images from db and generating array of urls
  const generateImageUrls = (id, num, ext) => {
    return [...Array(num).keys()].map((index) => ({
      original: `${imageBaseUrl}/${id}/${index}.${ext}`,
      thumbnail: `${imageBaseUrl}/${id}/${index}.${ext}`,
    }));
  };
  return (
    <LT.Layout>
      <LT.Main>
        <LT.H1 name="Zadelis" slogan="На прокат бери - деньги береги."></LT.H1>
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

export async function getStaticPaths() {
  const prokats = await getData("prokats", {}, true);
  const prokatRoutes = prokats.map((prokat) => ({
    params: { id: prokat._id.toString() },
  }));
  return {
    paths: prokatRoutes,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const prokatArray = await getData("prokats", { _id: ObjectID(params.id) });
    const prokat = prokatArray[0];
    prokat.id = prokat._id.toString();
    delete prokat._id;

    return {
      props: { prokat },
    };
  } catch (error) {
    return {
      props: { error: true },
    };
  }
}

export default Prokat;
