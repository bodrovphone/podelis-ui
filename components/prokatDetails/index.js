import React from 'react';
import { DetailsStyled, ContactOwnerWrapper } from './styles';
import { CardDetails, SectionStyled } from '../../components/singleCard/styles';
import { GeoAlt, Cash, Truck, Headset } from 'react-bootstrap-icons';

const ProkatDetails = ({price, location }) => (

  <DetailsStyled>
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
  </DetailsStyled>

);
export { SectionStyled, ContactOwnerWrapper };
export default ProkatDetails;