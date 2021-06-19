import React from "react";
import ST from "./styles";
import ST_ from "../../components/singleCard/styles";
import { GeoAlt, Cash, Truck, Headset } from "react-bootstrap-icons";

const ProkatDetails = ({ price, location }) => (
  <ST.Details>
    <ST_.CardDetails>
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
    </ST_.CardDetails>
  </ST.Details>
);

// need this bullshit to be able to export as named exports :0 ? Can I fix it later? Maybe not.
const ContactOwnerWrapper = ST.ContactOwnerWrapper;
const Section = ST_.Section;

export { Section, ContactOwnerWrapper };
export default ProkatDetails;
