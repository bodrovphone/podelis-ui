import styled from 'styled-components';
import { device } from '../../styles/media';

const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'podelisR-font';
  max-width: 568px;
  margin: auto;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  align-items: flex-start;
  position: relative;
  &:before {
    content: '';
    width: 90%;
    height: 1px;
    background: rgb(126, 126, 128);
    background: linear-gradient(
      90deg,
      rgba(126, 126, 128, 1) 0%,
      rgba(219, 220, 221, 1) 54%,
      rgba(249, 253, 254, 1) 100%
    );
    position: absolute;
    top: 0px;
    left: 10px;
  }
`;

const Date = styled.span`
  margin: 5px 0;
  display: block;
  font-family: monospace, 'podelisR-font';
  font-weight: 600;
`;

const PostThumbnail = styled.img`
  width: auto;
  height: 50px;
`;

const MessageText = styled.div`
  color: grey;
  padding: 3px 10px;

  @media ${device.tablet} {
    padding: 3px 30px;
  }
`;

const ProfileMini = styled.div`
  min-width: 54px;
`;

const MsgInput = styled.textarea`
  width: 60%;
  outline: none;
  padding: 5px 7px;
  border-radius: 0 10px 0 10px;
  border: 2px solid ${(props) => props.theme.colors.solt};
  box-shadow: ${(props) => props.theme.shadows.logoHeader};
  appearance: none;
  background: ${(props) => props.theme.colors.wellDone};
  text-align: center;
  font-family: 'podelis-font';
  font-size: 1em;

  ::placeholder {
    text-align: left;
  }

  &:focus {
    background-color: ${(props) => props.theme.colors.solt};
    border: 2px solid ${(props) => props.theme.colors.mediumWell};

    ::placeholder {
      color: transparent;
    }
  }
`;

const PictureWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 3px;
  align-items: center;
`;

const ButtonPhoto = styled.span`
  appearance: button;
  -moz-appearance: button;
  -webkit-appearance: button;
  text-align: center;
  padding: 2px 6px 3px;
  border: 2px outset buttonface;
  font: 13.3333px Arial;
  outline: none;
  margin: auto;
  padding: 5px 7px;
  border-radius: 0 10px 0 10px;
  border: 2px solid ${(props) => props.theme.colors.solt};
  height: 22px;
  box-shadow: ${(props) => props.theme.shadows.logoHeader};
  background: ${(props) => props.theme.colors.wellDone};
  text-align: center;
  font-family: 'podelis-font';
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 79%;

  :hover {
    box-shadow: 0 11px 5px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ButtonSubmit = styled.button`
  appearance: button;
  -moz-appearance: button;
  -webkit-appearance: button;
  text-align: center;
  padding: 2px 6px 3px;
  font: 13.3333px Arial;
  outline: none;
  padding: 5px 7px;
  border-radius: 0 10px 0 10px;
  border: 2px solid ${(props) => props.theme.colors.solt};
  height: 35px;
  box-shadow: ${(props) => props.theme.shadows.logoHeader};
  background-color: ${(props) => props.theme.colors.solt};
  border: 2px solid ${(props) => props.theme.colors.mediumWell};
  text-align: center;
  font-family: 'podelis-font';
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;

  :hover {
    box-shadow: 0 11px 5px 0 rgba(0, 0, 0, 0.2);
  }
`;

const FormButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Form = styled.form`
  width: 100%;
  padding-bottom: 50px;
  max-width: 435px;
  margin: auto;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  input[type='file'] {
    display: none;
  }
`;

const AdPreview = styled.img`
  width: 30%;
  max-width: 200px;
  max-height: 400px;
  margin: 6px;
`;

const PeriodWrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 5px;
`;

export default {
  MessagesWrapper,
  MessageContainer,
  Date,
  PostThumbnail,
  MessageText,
  ProfileMini,
  MsgInput,
  PictureWrapper,
  ButtonPhoto,
  ButtonSubmit,
  FormButtonsWrapper,
  Form,
  Label,
  AdPreview,
  PeriodWrapper,
  FormWrapper,
  ErrorDisplay: styled.span`
    color: red;
    font-size: 0.8em;
    margin-top: 4px;
    display: block; /* Or inline-block */
  `,
};
