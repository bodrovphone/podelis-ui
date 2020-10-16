import styled from 'styled-components';
import { device } from '../../styles/media';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  font-family: 'zadelisR-font';

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transform: scale(1.06);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;

export const CardDetails = styled.div`
  padding: 10px 0;
  margin-left: 5px;
  font-size: .9em;

  div {
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 10px;
    }

  }
    svg.bookmark {
      margin-left: auto;
      fill: ${ props => props.theme.colors.rareMedium };
    }
`;

export const CardImage = styled.div`

  img {
    width: 100%;
    height: auto;
  }
`;

export const CardTitle = styled.h3`
  font-size: .9em;
  font-weight: 500;
  vertical-align: bottom; 
  margin: 5px 0 0 5px;
  line-height: 1.2em;
  height: 2.4em;
  overflow: hidden;
  position: relative;

  &:after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 1.2em;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 90%);
  }
`;

export const SectionStyled = styled.section`
  @media ${device.tablet} { 
    width: 40%;
  }
`;