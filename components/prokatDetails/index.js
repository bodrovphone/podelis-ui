import React from "react";
import { Details_ST, ContactOwnerWrapper } from "./styles";
import { CardDetails, Section_ST } from "../../components/singleCard/styles";
import { GeoAlt, Cash, Truck, Headset } from "react-bootstrap-icons";

const ProkatDetails = ({ price, location }) => (
  <Details_ST>
    <CardDetails>
      <div className="location-bookmark">
        <GeoAlt />
        {location}
      </div>
      <div className="price">
        <Cash />
        {price}
      </div>
      <div>
        <Truck />
        Готов доставить
      </div>
      <div>
        <Headset />
        Всегда на связи
      </div>
    </CardDetails>
  </Details_ST>
);
export { Section_ST, ContactOwnerWrapper };
export default ProkatDetails;
