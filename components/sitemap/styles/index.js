import styled from "styled-components";
import { device } from "../../styles/media";

export const StyledWrapper_ST = styled.section`
  display: flex;
  margin: auto;
  flex-direction: column;

  @media ${device.tabletS} {
    flex-direction: row;
  }

  div:first-child {
    min-width: 40%;

    li:hover {
      list-style: kannada;
    }
  }

  div:nth-child(2) ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;

    list-style-type: none;
  }

  li a {
    display: inline-flex;
    align-items: center;
    gap: 3px;
    color: inherit;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.colors.rareMedium};
    }
  }
`;
