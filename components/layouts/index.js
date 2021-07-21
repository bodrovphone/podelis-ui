import React from "react";
import Container from "./container";
import Head from "./head";
import ST from "./styles";

const Layout = (props) => (
  <>
    <Head {...props} />
    <Container {...props} />
  </>
);

const Main = ({ children }) => <ST.Main>{children}</ST.Main>;

const H1 = (props) => (
  <ST.H1 {...props}>
    <div>{props.name}</div>
    <span>{props.slogan}</span>
  </ST.H1>
);
const H2 = (props) => <ST.H2 {...props} />;
const H3 = (props) => <ST.H3 {...props} />;

const Description = (props) => (
  <ST.Description {...props}>{props.children}</ST.Description>
);

const Button = (props) => <ST.Button {...props}>{props.children}</ST.Button>;

const Centered = ({ children }) => <ST.Centered>{children}</ST.Centered>;

const UL = ({ children }) => <ST.UL>{children}</ST.UL>;

export default {
  TwoColumnsDesktop: ST.TwoColumnsDesktop,
  TwoColumns: ST.TwoColumns,
  TwoColumnsWrap: ST.TwoColumnsWrap,
  Centered,
  VCentered: ST.VCentered,
  Description,
  H1,
  H2,
  H3,
  Main,
  Button,
  UL,
  Layout,
};
