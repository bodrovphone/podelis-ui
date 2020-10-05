import styled from 'styled-components';
import { device } from '../../styles/media';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  img {
    width: 45%;
    height: auto;
    margin: 10px 0;
  }

  @media ${device.mobileXL} { 
    img {
      width: 23%;
    }
  }
`;
