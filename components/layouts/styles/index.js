import styled from "styled-components";
import { device } from "../../styles/media";

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

export const Main_ST = styled.main`
  line-height: 150%;
  font-size: 1.1em;
  padding: 8px;

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

export const H1_ST = styled.h1`
  margin: 22px 0;
  font-size: 3em;
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

export const H2_ST = styled.h2`
  width: 100%;
  color: #c5c5c5;
  padding: 20px 0 0 50px;
`;

export const Description_ST = styled.div`
  .text-truncated {
    display: none;
  }

  @media ${device.mobileXL} {
    .text-truncated {
      display: inline;
    }
  }
`;

export const Centered_ST = styled.div`
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

export const TwoColumnsWrap = styled.div`
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

export const TwoColumns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;

export const TwoColumnsDesktop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 40px;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const VCentered_ST = styled.div`
  margin: 15px 0;
  padding: 10px 0 50px 0;
`;
