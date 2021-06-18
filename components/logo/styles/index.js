import styled from "styled-components";

const Logo = styled.div`
  box-sizing: border-box;
  font-family: "zadelis-font";
  border-radius: 50%;
  width: 82px;
  height: 82px;
  padding: 13px;
  background: #efefef;
  border: 2px solid ${(props) => props.theme.colors.rareMedium};
  color: ${(props) => props.theme.colors.rareMedium};
  text-align: center;
  font-size: 48px;
  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3);
  margin: 0 auto;
  transition: transform 0.8s ease-in-out;

  :hover {
    transform: rotate(360deg);
  }
`;

export default {
  Logo,
};
