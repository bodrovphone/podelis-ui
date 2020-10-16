import styled from 'styled-components';
import { device } from '../../styles/media';

export const GalleryWrapper = styled.div`
  display: grid;
  
  @media ${device.tablet} { 
    width: 55%;
  }
`;