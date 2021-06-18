import styled from "styled-components";

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AvatarImage = styled.img`
  width: 50px;
  height: auto;
`;

const Name = styled.div`
  font-size: 14px;
`;

const WrapperEditable = styled.div`
  display: flex;
  gap: 10px 14px;
  align-items: end;
  flex-wrap: wrap;
  min-width: 35%;

  button {
    flex: 0 1 50%;
    padding: 5px 10px;
  }
`;

const Avatar = styled.div`
  display: flex;
  /* flex-direction: column;
  justify-content: center; */
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 80px;
  height: 80px;

  &:hover {
    div {
      opacity: 0.6;
    }
  }

  span {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.3s ease;
  background-color: white;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  font-size: 1.2em;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  font-size: 14px;
  appearance: none;
  outline: none;
  border: none;
  background: #fafbfb;
`;

export default {
  WrapperEditable,
  Avatar,
  AvatarContainer,
  Image,
  Overlay,
  ContactInfo,
  Field,
  Input,
  ProfileWrapper,
  AvatarImage,
  Name,
};
