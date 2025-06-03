import React from "react";
import ST from "./styles";
import ST_ from "../../components/singleCard/styles";
import {
  GeoAlt,
  Cash,
  Bank,
  PencilSquare,
  ThreeDots,
} from "react-bootstrap-icons";
import { getEnding } from "../../utils";

interface ProkatDetailsProps {
  price: number;
  period: number;
  units: boolean;
  city: string;
  conditions: string[];
  deposit: number;
  [key: string]: any; // For any other potential props
}

// any antipatterns here ?
// candidate for useMemo or useCallack hooks?
const ProkatDetails = ({ price, period, units, city, conditions, deposit }: ProkatDetailsProps) => {
  const icons: JSX.Element[] = [
    <div key={city}>
      <GeoAlt />
      {city}
    </div>,
    <div className="price" key={price}>
      <Cash />
      {`${price}грн/${getEnding(period, units)}`}
    </div>,
  ];

  conditions.map((condition: string, index: number) => {
    if (condition === "deposit") {
      icons.push(
        <div key={`${condition}-${index}`}> {/* Ensure unique keys */}
          <Bank />
          Залог ({deposit})
        </div>
      );
    }
    if (condition === "terms") {
      icons.push(
        <div key={`${condition}-${index}`}> {/* Ensure unique keys */}
          <PencilSquare />
          Договор аренды
        </div>
      );
    }
    if (condition === "pledge") {
      icons.push(
        <div key={`${condition}-${index}`}> {/* Ensure unique keys */}
          <ThreeDots />
          Другие условия
        </div>
      );
    }
  });

  return (
    <ST.Details>
      <ST_.CardDetails>{icons}</ST_.CardDetails>
    </ST.Details>
  );
};

// need this bullshit to be able to export as named exports :0 ? Can I fix it later? Maybe not.
const ContactOwnerWrapper = ST.ContactOwnerWrapper;
const Section = ST_.Section;

export { Section, ContactOwnerWrapper };
export default ProkatDetails;
