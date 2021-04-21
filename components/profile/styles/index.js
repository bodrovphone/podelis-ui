import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 50px;
  height: auto;
`;

export const Name = styled.div`
  font-size: 14px;
`;

export const ProfileWrapper_ST = styled.div`
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

export const Avatar_ST = styled.div`
  display: flex;
  /* flex-direction: column;
  justify-content: center; */
`;

export const AvatarContainer_ST = styled.div`
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

export const Image_ST = styled.img`
  width: 100%;
  height: auto;
`;

export const Overlay_ST = styled.div`
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

export const ContactInfo_ST = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  font-size: 1.2em;
`;

export const Field_ST = styled.div`
  display: flex;
  align-items: center;
`;

export const Input_ST = styled.input`
  font-size: 14px;
  appearance: none;
  outline: none;
  border: none;
  background: #fafbfb;
`;

export const Posts_ST = styled.div``;

export const Messages_ST = styled.div``;

export const Settings_ST = styled.div``;
