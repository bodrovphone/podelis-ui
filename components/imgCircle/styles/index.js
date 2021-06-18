import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  width: 300px;
  height: 250px;
  margin: auto;
`;

const ImageCircle = styled.img`
  position: absolute;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`;

export default {
  Wrapper,
  ImageCircle,
};
