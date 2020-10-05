import styled from 'styled-components';
import { device } from '../../styles/media';

export const AboutStyled = styled.section`
  height: 300px;
  background: ${props => props.theme.main.colors.lemon};
  width: 100%;
  padding: 20px .3em;
  margin: 30px 0;
  position: relative;
`;

export const ContentStyled = styled.div`
  font-size: 1.1em;
  text-align: center;
  line-height: 1.5em;
  padding-top: 20px;
  font-family: 'zadelis-font-italic';
`;

export const GoSocial = styled.div`
  margin: 20px auto;
  text-align: center;
  
  img {
    width: 48px;
    height: 48px;
    background-color: transparent;
    margin-left: 10px;
  }
`;