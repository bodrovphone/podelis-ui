import styled from "styled-components";
import { device } from "../../styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  gap: 10px;

  & > div {
    width: 45%;
    height: auto;
    max-height: 180px;
  }

  @media ${device.mobileXL} {
    justify-content: space-around;

    & > div {
      width: 23%;
    }
  }
`;
