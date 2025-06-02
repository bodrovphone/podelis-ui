import React from "react";
import Container from "./container";
import Head from "./head";
import ST from "./styles";
import { ReactNode } from 'react';

interface GenericProps {
  children?: ReactNode;
  [key: string]: any; // For any other props
}

interface H1Props extends GenericProps {
  name: string;
  slogan: string;
}

const Layout = (props: any) => (
  <>
    <Head {...props} />
    <Container {...props} />
  </>
);

const Main = ({ children }: GenericProps) => <ST.Main>{children}</ST.Main>;

const H1 = (props: H1Props) => (
  <ST.H1 {...props}>
    <div>{props.name}</div>
    <span>{props.slogan}</span>
  </ST.H1>
);
const H2 = (props: GenericProps) => <ST.H2 {...props} />;
const H3 = (props: GenericProps) => <ST.H3 {...props} />;

const Description = (props: GenericProps) => (
  <ST.Description {...props}>{props.children}</ST.Description>
);

const Button = (props: GenericProps) => <ST.Button {...props}>{props.children}</ST.Button>;

const Centered = ({ children }: GenericProps) => <ST.Centered>{children}</ST.Centered>;

const UL = ({ children }: GenericProps) => <ST.UL>{children}</ST.UL>;

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
