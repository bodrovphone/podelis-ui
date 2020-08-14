import styled, { keyframes } from 'styled-components';
import { device } from '../../styles/media';
import { rotate } from '../../styles/animations';


// Когда дойдешь до media кверей переделывай все под mobile-first 
// бо у тебя стили отталкиваются от десктопа а мы начали делать с мобилы ёпт
export const SbContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  z-index: 5;
  position: fixed;
  top: 0;
  right: -300px;
  overflow-x: hidden;
  transition: ease-out 1s;
  display: flex;
  flex-direction: column-reverse;
  background-color: ${props => props.theme.main.colors.dark};
  align-items: baseline;
  box-sizing: border-box;

  &.active {
    right: 0;
    width: 180px;
  }

  @media ${device.mobileXL} { 
    flex-direction: column;
    padding-top: 15px;
  }

  @media ${device.laptop} {
    &.active {
    width: 200px;
  }
  }
`;

export const SbLink = styled.a`
  cursor: pointer;
  margin: 0 0 40px 25px;
  display: flex;
  align-items: center;

    &:hover span {
      color: ${props => props.theme.main.colors.paleGrey};
    }

    &:hover svg {
      fill: ${props => props.theme.main.colors.white} !important;
    }
`;

export const SbItemSpan = styled.span`
  display: block;
  color: ${props => props.theme.main.colors.skyBlue};
  font-size: 1em;
  margin-left: 10px;
`;

// TODO: This is going to be removed probably when I integrate context with clicking on the body
export const Close = styled.button`
  background: ${props => props.theme.main.colors.dark};
  width: 10em;
  outline: none;
  margin: 0 0 60px 35px;

  @media ${device.mobileXL} { 
    margin: 0 0 16px 4px;
    width: 2em;
    font-size: 2em;
    outline: none;
    border: none;
  }
`;

export const NavLang = styled.span`
  display: flex;
  cursor: pointer;
  color: ${props => props.theme.main.colors.paleSkyBlue};
  margin: 0 0 40px 25px;
  align-items: center;
  
    & span {
      display: block;
      margin: 0 10px;
    }

    & .optLang {
      color: ${props => props.theme.main.colors.skyBlue};
    }
`