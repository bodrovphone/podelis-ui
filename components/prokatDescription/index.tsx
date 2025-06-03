import React from "react";
import ST from "./styles";

interface ProkatDescriptionProps {
  description: any; // Or string, if it's always a string
}

const ProkatDescription = ({ description }: ProkatDescriptionProps) => (
  <ST.Description>{description}</ST.Description>
);

export default ProkatDescription;
