import styled from "styled-components";
import { device } from "../../styles/media";

const Wrapper = styled.div`
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

const Main = styled.main`
  line-height: 150%;
  font-size: 1.1em;
  padding: 8px;
  font-family: "zadelis-font";

  @media ${device.mobileXL} {
    padding: 5em 3em 2em 3em;
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

const H1 = styled.h1`
  margin: 22px 0;
  font-size: ${(props) => props.size || "3em"};
  color: ${(props) => props.theme.colors.rareMedium};
  font-family: "zadelis-font";
  & div {
    text-shadow: ${(props) => props.theme.shadows.logoHeader};
    margin-bottom: 5px;
  }
  & span {
    font-size: 0.3em;
    color: ${(props) => props.theme.colors.mediumWell};
    padding-left: 2em;
  }
`;

const H2 = styled.h2`
  width: 100%;
  color: #c5c5c5;
  padding: 20px 0 0 50px;
`;

const Description = styled.div`
  .text-truncated {
    display: none;
  }

  @media ${device.mobileXL} {
    .text-truncated {
      display: inline;
    }
  }
`;

const Centered = styled.div`
  line-height: 150%;
  font-size: 1.1em;
  padding: 8px;

  @media ${device.mobileXL} {
    padding: 1em 3em;
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

const TwoColumnsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;

  align-items: flex-start;
  align-content: flex-start;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const TwoColumns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;

const TwoColumnsDesktop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 40px;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const VCentered = styled.div`
  margin: 15px 0;
  padding: 10px 0 50px 0;
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px 18px;
  font-size: 16px;
  font-family: "zadelis-font";
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: black;
  background-color: ${(props) => props.theme.colors.solt};
  border: 2px solid ${(props) => props.theme.colors.mediumWell};
  border-radius: 0 10px 0 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  span {
    position: relative;
    transition: all 0.5s;
  }

  span i {
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  :hover {
    border: 2px solid ${(props) => props.theme.colors.solt};
    background-color: ${(props) => props.theme.colors.mediumWell};
  }

  :hover span {
    padding-right: 25px;
  }

  :hover span i {
    opacity: 1;
    right: 0;
  }

  :active {
    background-color: ${(props) => props.theme.colors.mediumWell};
    box-shadow: 0 11px 5px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(4px);
    outline: none;
  }
`;

const H3 = styled.h3`
  font-size: 16px;
  color: #565353;
`;

const UL = styled.ul`
  display: grid;
  grid-gap: 30px 20px;
  /* grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); */

  margin: 0;
  padding: 0;
  li {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 35px;

    @media ${device.mobileXL} {
      flex-direction: row;

      &:nth-last-of-type(2n + 1) {
        flex-direction: row-reverse;
      }
    }
  }

  li p {
    padding-left: 24px;
  }
`;

export default {
  Wrapper,
  Main,
  H1,
  H2,
  Description,
  Centered,
  VCentered,
  Button,
  H3,
  UL,
  TwoColumnsWrap,
  TwoColumnsDesktop,
  TwoColumns,
};
