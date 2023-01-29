import styled from 'styled-components';
import { device } from '../../styles/media';

export const FiltersWrapper_ST = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  label:nth-of-type(2n) {
    input {
      max-width: 80px;
    }
  }
`;

export const Input_ST = styled.input`
  outline: none;
  appearance: none;
  padding: 5px 7px;

  border: 2px solid ${(props) => props.theme.colors.mediumWell};

  ::placeholder {
    text-align: center;
  }

  &:focus {
    background-color: ${(props) => props.theme.colors.solt};
    border: 2px solid ${(props) => props.theme.colors.mediumWell};

    ::placeholder {
      color: transparent;
    }
  }
`;

export const Label_ST = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 0 10px 0 10px;
  border: 2px solid ${(props) => props.theme.colors.solt};
  height: 40px;
  box-shadow: ${(props) => props.theme.shadows.logoHeader};
  background: ${(props) => props.theme.colors.wellDone};
  text-align: center;
  font-family: 'podelis-font';
  font-size: 1em;
  padding: 10px;

  span {
    display: flex;
    align-items: center;
    margin: 0 10px;

    svg {
      margin-left: 3px;
    }
  }
`;

export const Select_ST = styled.select`
  outline: none;
  padding: 5px 7px;

  border: 2px solid ${(props) => props.theme.colors.mediumWell};

  ::placeholder {
    text-align: center;
  }

  &:focus {
    background-color: ${(props) => props.theme.colors.solt};
    border: 2px solid ${(props) => props.theme.colors.mediumWell};

    ::placeholder {
      color: transparent;
    }
  }
`;

export const Option_ST = styled.option``;
