import styled from "styled-components";
import { Field } from "formik";
import { device } from "../../styles/media";

export const SettingWrapper_ST = styled.div`
  margin: 0 auto;
`;

export const SaveWrapper_ST = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px auto;
`;

export const Group_ST = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  margin: 20px 0;
`;

export const Radio_ST = styled(Field)`
  /* custom radio */
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const CheckMark_ST = styled.span`
  /* custom radio */
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;

  &::after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export const Label_ST = styled.label`
  align-items: center;
  display: flex;

  /* custom radio */
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  cursor: pointer;
  :hover input ~ span {
    background-color: #ccc;
  }
  input:checked ~ span {
    background-color: ${(props) => props.theme.colors.rareMedium};
  }
  input:checked ~ span::after {
    display: block;
  }

  span::after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

export const SettingTitle_ST = styled.div`
  width: 100%;
  font-family: "zadelisR-font";
  font-weight: bold;
`;

export const ButtonSetting_ST = styled.button`
  display: inline-block;
  padding: 5px;
  font-size: 16px;
  font-family: "zadelis-font";
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: black;
  background-color: ${(props) => (props.delete ? "#ff944d" : "#ffc299")};
  border: 2px solid ${(props) => props.theme.colors.mediumWell};
  border-radius: 0 10px 0 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  span {
    position: relative;
    transition: all 0.5s;
  }

  span i {
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  :hover {
    border: 2px solid ${(props) => props.theme.colors.solt};
    background-color: "#ffc299";
  }

  :hover span {
    padding-right: 25px;
  }

  :hover span i {
    opacity: 1;
    right: 0;
  }

  :active {
    background-color: "#ffc299";
    box-shadow: 0 11px 5px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(4px);
    outline: none;
  }
`;