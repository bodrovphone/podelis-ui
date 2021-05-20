import React from "react";
import Container from "./container";
import Head from "./head";
import {
  Main_ST,
  H1_ST,
  H2_ST,
  H3_ST,
  Description_ST,
  Centered_ST,
  TwoColumnsDesktop,
  TwoColumns,
  TwoColumnsWrap,
  VCentered_ST,
  Button_ST,
  UL_ST,
  IMG_CIRCLE_WRAPPER_ST,
  IMG_CICRLE_ST,
  Paper_ST,
} from "./styles";

const Layout = (props) => (
  <>
    <Head {...props} />
    <Container {...props} />
  </>
);

const Main = ({ children }) => <Main_ST>{children}</Main_ST>;

const H1 = (props) => (
  <H1_ST {...props}>
    <div>{props.name}</div>
    <span>{props.slogan}</span>
  </H1_ST>
);
const H2 = (props) => <H2_ST {...props} />;
const H3 = (props) => <H3_ST {...props} />;

const Description = (props) => (
  <Description_ST {...props}>{props.children}</Description_ST>
);

const Button = (props) => <Button_ST>{props.children}</Button_ST>;

const Centered = ({ children }) => <Centered_ST>{children}</Centered_ST>;
const Paper = ({ children }) => <Paper_ST>{children}</Paper_ST>;

const UL = ({ children }) => <UL_ST>{children}</UL_ST>;

const ImgCircle = ({ src }) => (
  <IMG_CIRCLE_WRAPPER_ST>
    <IMG_CICRLE_ST src={src} />
  </IMG_CIRCLE_WRAPPER_ST>
);

export {
  TwoColumnsDesktop,
  TwoColumns,
  TwoColumnsWrap,
  Centered,
  VCentered_ST,
  Description,
  H1,
  H2,
  H3,
  Main,
  Button,
  UL,
  ImgCircle,
  Paper,
};

export default Layout;
