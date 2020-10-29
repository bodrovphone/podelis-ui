import styled from "styled-components";
import { device } from "../../styles/media";

const DescriptionWrapper = styled.div`
  margin: 20px 0;
  font-family: "zadelisR-font";
  font-size: 1em;

  @media ${device.tablet} {
    width: 40%;
  }
`;

const Description_ST = styled.article`
  padding: 10px 0;
`;

export { DescriptionWrapper, Description_ST };
