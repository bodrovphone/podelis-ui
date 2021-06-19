import styled from "styled-components";
import { device } from "../../styles/media";

const Form = styled.form`
  width: 100%;
  height: 100vh;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 90%;

  input[type="file"] {
    display: none;
  }
`;

const Input = styled.input`
  width: 70%;
  outline: none;
  padding: 5px 7px;
  border-radius: 0 10px 0 10px;
  border: 2px solid ${(props) => props.theme.colors.solt};
  height: 35px;
  box-shadow: ${(props) => props.theme.shadows.logoHeader};
  appearance: none;
  background: ${(props) => props.theme.colors.wellDone};
  text-align: center;
  font-family: "zadelis-font";
  font-size: 1em;

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

const SocialWrapper = styled.div`
  width: 90%;
  margin: auto;

  div {
    width: 70%;
    display: flex;
    justify-content: space-around;
  }

  button {
    margin-right: 40px;
  }

  button span {
    display: flex;
    justify-content: center;
    align-items: center;

    i {
      top: 4px;
    }
  }

  @media ${device.mobileS} {
    div {
      flex-direction: column;
    }

    button {
      padding: 5px;
      font-size: 0.8em;
      margin: 10px 0 0 0;
    }
  }

  @media ${device.laptop} {
    div {
    }

    button {
      width: 40%;
      margin: 10px auto;
    }
  }
`;

const Img = styled.img`
  max-width: 25px;
  height: auto;
  margin-right: 5px;
`;

const SubmitWrapper = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    width: 70%;
    justify-content: flex-end;
  }
`;

const CheckboxLabel = styled.label`
  font-size: 0.7em;
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: center;
  margin-bottom: 15px;
  font-weight: bold;

  span {
    align-self: end;
  }
`;

const Checkbox = styled.input``;

const Error = styled.span`
  color: #ffa9b5;
`;

export default {
  Form,
  Label,
  Input,
  SocialWrapper,
  Img,
  SubmitWrapper,
  CheckboxLabel,
  Checkbox,
  Error,
};
