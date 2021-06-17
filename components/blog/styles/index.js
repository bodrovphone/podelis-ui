import styled from "styled-components";
import { device } from "../../styles/media";

const Recommended = styled.ul`
  text-align: left;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.rareMedium};
  }

  a:hover {
    color: ${(props) => props.theme.colors.rare};
  }
`;

const Blog = styled.div`
  text-align: center;
  font-family: "zadelis-font";
  font-size: 1em;

  @media ${device.tablet} {
    text-align: left;
  }
`;

export default {
  Recommended,
  Blog,
};
