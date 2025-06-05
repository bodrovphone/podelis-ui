// import ReactHtmlParser from "react-html-parser";
import Image from 'next/image';
import Link from 'next/link';
import LT from '../layouts';

const Recommendations = (recommended: any) => {
  return (
    recommended && (
      <ul className="text-left">
        <LT.H3>P.s. Рекомендуем к прочтению:</LT.H3>
        {recommended.map((item: any, index: number) => (
          <li key={index}>
            <Link href={item.path}>
              <a className="no-underline text-rareMedium hover:text-rare">{item.text}</a>
            </Link>
            {item.extra}
          </li>
        ))}
      </ul>
    )
  );
};

const Blog = ({ data }: { data: any }) =>
  data.blocks.map(({ text, image, recommended }: { text: any, image: any, recommended: any }, index: number) => (
    <div key={index} className="text-center font-['podelis-font'] text-base md:text-left">
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
    </div>
  ));

export default Blog;
