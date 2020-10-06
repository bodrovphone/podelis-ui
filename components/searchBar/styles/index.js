import styled from 'styled-components';
import { device } from '../../styles/media';

export const InputWrapper = styled.div`
  display: flex;

  span {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 90%;
  margin: 0 auto 40px 3%;
  outline: none;
  padding: 5px 7px;
  border-radius: 0 10px 0 10px;
  border: 2px solid ${props => props.theme.colors.solt};
  height: 35px;
  box-shadow: ${props => props.theme.shadows.logoHeader};
  appearance: none;
  background: ${props => props.theme.colors.wellDone};
  text-align: center;
  font-family: 'zadelis-font';
  font-size: 1em;

  ::placeholder {
      text-align: center;
    }

  &:focus {
    background-color: ${props => props.theme.colors.solt};
    border: 2px solid ${props => props.theme.colors.mediumWell};

    ::placeholder {
      color: transparent;
    }
  }

  @media ${device.mobileXL} { 
    width: 70%;
    margin: 0 auto 40px auto;
   }
`;