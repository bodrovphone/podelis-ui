import ST from "./styles";

interface ImgCircleProps {
  src: string;
}

const ImgCircle = ({ src }: ImgCircleProps) => (
  <ST.Wrapper>
    <ST.ImageCircle src={src} />
  </ST.Wrapper>
);

export default ImgCircle;
