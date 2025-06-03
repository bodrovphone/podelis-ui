// import ReactHtmlParser from "react-html-parser";
import Image from 'next/image';
import Link from 'next/link';
import LT from '../layouts';
import ST from './styles';

const Recommendations = (recommended: any) => {
  return (
    recommended && (
      <ST.Recommended>
        <LT.H3>P.s. Рекомендуем к прочтению:</LT.H3>
        {recommended.map((item: any, index: number) => (
          <li key={index}>
            <Link href={item.path}>{item.text}</Link>
            {item.extra}
          </li>
        ))}
      </ST.Recommended>
    )
  );
};

const Blog = ({ data }: { data: any }) =>
  data.blocks.map(({ text, image, recommended }: { text: any, image: any, recommended: any }, index: number) => (
    <ST.Blog key={index}>
      {/* {ReactHtmlParser(text)} */}
      {image && (
        <Image
          src={image}
          alt="Picture of money"
          width={650}
          height={300}
          layout="responsive"
        />
      )}
      {recommended && Recommendations(recommended)}
    </ST.Blog>
  ));

export default Blog;
