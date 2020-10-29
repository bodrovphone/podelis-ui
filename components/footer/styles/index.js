import styled from "styled-components";
import { device } from "../../styles/media";

export const Footer_ST = styled.footer`
  background: ${(props) => props.theme.colors.wellDone};
  width: 100%;
  padding: 25px 8px 80px 8px;
  position: relative;

  strong {
    position: absolute;
    bottom: 10px;
    right: 20px;
  }
`;

export const Grid_ST = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 20px;

  @media ${device.mobileM} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.tablet} {
    width: 90%;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.laptop} {
    width: 70%;
  }
`;

export const GridBlock_ST = styled.ul`
  line-height: 30px;
  margin: 0;
  color: ${(props) => props.theme.colors.medium};

  img,
  svg {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }

  address div {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const GridItem_ST = styled.li`
  :first-child {
    list-style: none;
    font-weight: bold;
    margin-bottom: 5px;
    color: ${(props) => props.theme.colors.rareMedium};
  }

  :first-child:hover {
    list-style: none;
    color: ${(props) => props.theme.colors.mediumRare};
    cursor: default;
  }

  :hover {
    cursor: pointer;
    list-style: kannada;
    color: ${(props) => props.theme.colors.rare};
  }
`;
