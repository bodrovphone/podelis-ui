import styled from "styled-components";
import { device } from "../../styles/media";

const GalleryWrapper = styled.div`
  display: grid;

  @media ${device.tablet} {
    width: 55%;
  }
`;

export default {
  GalleryWrapper,
};
