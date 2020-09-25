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

export const MainStyled = styled.main`
  padding: 0 .3em;
  line-height: 150%;
  font-size: 1.1em;

  @media ${device.mobileXL} { 
    padding: 5em 0; 
  }

  @media ${device.laptop} {
      width: 80%;
      margin: 0 auto;
  }

  @media ${device.laptopL} {
      width: 70%;
      margin: 0 auto;
  }
`;

export const H1Styled = styled.h1`
  margin: 22px 0;
  font-size: 3em;
  color: ${props => props.theme.main.colors.blue};
  font-family: 'zadelis-font';
  & div {
    text-shadow: ${props => props.theme.main.shadows.logoHeader};
    margin-bottom: 5px;
  }
  & span {
    font-size: 0.3em;
    color: ${props => props.theme.main.colors.skyBlue};
    padding-left: 2em;
  }
`;

export const DescriptionStyled = styled.div`
  .text-truncated {
    display: none
  }

  @media ${device.mobileXL} { 
    .text-truncated {
      display: inline;
    }
  }
`;