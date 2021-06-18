import styled from "styled-components";

const About = styled.section`
  height: 300px;
  background: ${(props) => props.theme.colors.solt};
  width: 100%;
  padding: 20px 0.3em;
  margin: 30px 0;
  position: relative;
`;

const Content = styled.div`
  font-size: 1.1em;
  text-align: center;
  line-height: 1.5em;
  padding-top: 20px;
  font-family: "zadelis-font-italic";
`;

const Social = styled.div`
  margin: 20px auto;
  text-align: center;

  a {
    margin-right: 10px;
  }
`;

export default {
  About,
  Content,
  Social,
};
