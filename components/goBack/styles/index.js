import styled from "styled-components";

const Wrapper = styled.div`
  margin: 30px auto;
  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
`;

const GoBack = styled.button`
  display: inline-block;
  padding: 10px 18px;
  font-size: 16px;
  font-family: "zadelis-font";
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: black;
  background-color: ${(props) => props.theme.colors.mediumWell};
  border: 2px solid ${(props) => props.theme.colors.solt};
  border-radius: 0 10px 0 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  :hover {
    border: 2px solid ${(props) => props.theme.colors.mediumRare};
    background-color: ${(props) => props.theme.colors.solt};
  }

  :active {
    background-color: ${(props) => props.theme.colors.mediumWell};
    box-shadow: 0 11px 5px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(4px);
    outline: none;
  }
`;

export default {
  Wrapper,
  GoBack,
};
