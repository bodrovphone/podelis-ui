import styled from 'styled-components';
import { device } from '../../styles/media';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  transition: width ease 2s;

  @media ${device.mobileXL} { 
      &.active {
        margin-right: 180px;
        width: calc(100% - 180px);
      }
    }
`;