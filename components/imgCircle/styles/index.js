import styled from "styled-components";

export const IMG_CIRCLE_WRAPPER_ST = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  width: 300px;
  height: 250px;
  margin: auto;
`;

export const IMG_CICRLE_ST = styled.img`
  position: absolute;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`;
