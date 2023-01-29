import styled from 'styled-components';
import { device } from '../../styles/media';

const SbContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  z-index: 1;
  position: fixed;
  bottom: 65px;
  right: -180px;
  overflow-x: hidden;
  transition: right 2s;
  display: flex;
  flex-direction: column-reverse;
  background-color: ${(props) => props.theme.colors.wellDone};
  align-items: baseline;
  box-sizing: border-box;
  width: 180px;

  &.active {
    right: 0;
  }

  @media ${device.mobileXL} {
    flex-direction: column;
    padding-top: 15px;
    z-index: 400;
    top: 0;
  }

  @media ${device.laptop} {
    &.active {
      width: 200px;
    }
  }
`;

const SbLink = styled.span`
  cursor: pointer;
  margin: 0 0 40px 25px;
  display: flex;
  align-items: center;

  &:hover span {
    color: ${(props) => props.theme.colors.rare};
  }

  &:hover svg {
    fill: ${(props) => props.theme.colors.solt} !important;
  }
`;

const SbItemSpan = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.rareMedium};
  font-size: 1em;
  margin-left: 10px;
`;

// TODO: This is going to be removed probably when I integrate context with clicking on the body
const Close = styled.button`
  background: ${(props) => props.theme.colors.wellDone};
  width: 10em;
  outline: none;
  margin: 0 0 25px 35px;

  @media ${device.mobileXL} {
    margin: 0 0 16px 4px;
    width: 2em;
    font-size: 2em;
    outline: none;
    border: none;
  }
`;

const NavLang = styled.span`
  display: flex;
  cursor: pointer;
  color: ${(props) => props.theme.colors.rare};
  margin: 0 0 40px 25px;
  align-items: center;

  .optLang:hover {
    color: ${(props) => props.theme.colors.solt};
  }

  & span {
    display: block;
    margin: 0 10px;
  }

  & .optLang {
    color: ${(props) => props.theme.colors.mediumWell};
  }
`;
export default {
  SbContainer,
  SbLink,
  SbItemSpan,
  Close,
  NavLang,
};
