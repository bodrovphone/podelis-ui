import styled from "styled-components";
import { device } from "../../styles/media";

const FavSearchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 40px 0;

  @media ${device.tablet} {
    width: 60%;
    margin: auto;
  }
`;

const Query = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 5px;
    padding-left: 10px;
    text-decoration: none;
    color: #000000;
  }
`;

const SearchContainer = styled.div`
  box-shadow: ${(props) => props.theme.shadows.logoHeader};
  border-radius: 0 10px 0 10px;
  font-family: "zadelis-font";
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 10px;
  background-color: #fdfdfd;
  position: relative;
  width: 95%;
  margin: auto;
`;

const Meta = styled.div`
  display: flex;
  gap: 5px;
  padding-left: 10px;
  align-items: center;
  font-size: 0.8em;
  margin-right: 10px;

  svg {
    &:first-of-type {
      position: absolute;
      top: -9px;
      right: -9px;
    }
  }
`;

const New = styled.div`
  margin-left: auto;
  svg {
    position: static !important;
  }
`;

export default {
  FavSearchesContainer,
  Query,
  SearchContainer,
  Meta,
  New,
};
