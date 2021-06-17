import styled from "styled-components";

export const About_ST = styled.section`
  height: 300px;
  background: ${(props) => props.theme.colors.solt};
  width: 100%;
  padding: 20px 0.3em;
  margin: 30px 0;
  position: relative;
`;

export const Content_ST = styled.div`
  font-size: 1.1em;
  text-align: center;
  line-height: 1.5em;
  padding-top: 20px;
  font-family: "zadelis-font-italic";
`;

export const Social_ST = styled.div`
  margin: 20px auto;
  text-align: center;

  a {
    margin-right: 10px;
  }
`;
