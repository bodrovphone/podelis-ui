import React from "react";
import ST from "./styles";

interface ProkatTitleProps {
  title: any; // Or string, if it's always a string
}

const ProkatTitle = ({ title }: ProkatTitleProps) => <ST.ProkatH2>{title}</ST.ProkatH2>;

export default ProkatTitle;
