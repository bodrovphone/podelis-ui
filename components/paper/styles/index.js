import styled from "styled-components";
import { device } from "../../styles/media";

const Paper = styled.div`
  position: relative;
  padding: 5px;
  border-radius: 12px;

  @media ${device.mobileXL} {
    width: 50%;
  }

  background-color: #fff;
  background-image: linear-gradient(
      90deg,
      transparent 19px,
      #abced4 19px,
      #abced4 21px,
      transparent 21px
    ),
    linear-gradient(#eee 0.1em, transparent 0.1em);
  background-size: 100% 1.2em;
  background-position: 0% 2%;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    height: 20px;
    width: 100%;
    background: url(${"img/rip.svg"}) bottom center;
    background-size: 150%;
  }
`;

export default {
  Paper,
};
