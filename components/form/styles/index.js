import styled from 'styled-components';

const Form_ST = styled.form`width: 100%;`;

const Label_ST = styled.label`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 90%;
`;

const Input_ST = styled.input`
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
  font-family: 'zadelis-font';
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

const InputRange_ST = styled.input`
  width: 90%;
  margin: 20px 0;
  `;

const TextArea_ST = styled.textarea`
  width: 70%;
  height: 150px;
  outline: none;
  padding: 5px 7px;
  border-radius: 0 10px 0 10px;
  border: 2px solid ${(props) => props.theme.colors.solt};
  box-shadow: ${(props) => props.theme.shadows.logoHeader};
  appearance: none;
  background: ${(props) => props.theme.colors.wellDone};
  text-align: center;
  font-family: 'zadelis-font';
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

const PeriodWrapper_ST = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: baseline;
`;

const CheckboxWrapper_ST = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LabelPeriod_ST = styled.label`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 50%;
`;

const InputPeriod_ST = styled.input`
  width: 90%;
  outline: none;
  padding: 5px 7px;
  border-radius: 0 10px 0 10px;
  border: 2px solid ${(props) => props.theme.colors.solt};
  height: 35px;
  box-shadow: ${(props) => props.theme.shadows.logoHeader};
  appearance: none;
  background: ${(props) => props.theme.colors.wellDone};
  text-align: center;
  font-family: 'zadelis-font';
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

const CheckBoxLabel_ST = styled.label`
  position: relative;
  display: inline-block;
  width: 43px;
  height: 22px;
  margin: 6px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 22px;
  }

  span:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 6px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }

  input:checked + span {
    background-color: #2196f3;
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
  }
`;

export {
  Form_ST,
  Input_ST,
  InputRange_ST,
  Label_ST,
  PeriodWrapper_ST,
  TextArea_ST,
  CheckboxWrapper_ST,
  LabelPeriod_ST,
  InputPeriod_ST,
  CheckBoxLabel_ST
};
