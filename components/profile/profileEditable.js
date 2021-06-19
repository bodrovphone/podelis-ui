import React, { useState } from "react";
import ST from "./styles";
import { withTheme } from "styled-components";
import LT from "../layouts";
import { Camera, Pencil } from "react-bootstrap-icons";

const ProfileEditable = ({
  name,
  avatarUrl = "http://www.gravatar.com/avatar/?d=mp",
  theme,
}) => {
  const [state, setState] = useState({
    name,
    size: name.length + 1,
    tel: "телефон",
    city: "город",
  });

  const handleChange = ({ target }) => {
    setState({
      ...state,
      [target.name]: target.value,
      [target.name === "name" && "size"]: target.value.length + 5,
    });
  };

  return (
    <ST.WrapperEditable>
      <LT.H2>Профиль</LT.H2>
      <ST.Avatar>
        <ST.AvatarContainer>
          <ST.Image src={avatarUrl} />
          <ST.Overlay>
            <span>
              <Camera size={26} fill={theme.colors.mediumRare} />
            </span>
          </ST.Overlay>
        </ST.AvatarContainer>
      </ST.Avatar>
      <ST.ContactInfo>
        <ST.Field>
          <Pencil />
          <ST.Input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            maxLength="18"
            size={state.size}
          />
        </ST.Field>
        <ST.Field>
          <Pencil />
          <ST.Input
            type="tel"
            name="tel"
            pattern="^((\+)?3?8)?0[1-9]{2}[0-9 ]{7}"
            value={state.tel}
            onChange={handleChange}
            maxLength="18"
            size={14}
          />
        </ST.Field>
        <ST.Field>
          <Pencil />
          <ST.Input
            type="text"
            name="city"
            value={state.city}
            onChange={handleChange}
            maxLength="18"
            size={18}
          />
        </ST.Field>
      </ST.ContactInfo>
      <LT.Button type="button">
        <span>
          Сохранить
          <i>&gt;&gt;</i>
        </span>
      </LT.Button>
    </ST.WrapperEditable>
  );
};

export default withTheme(ProfileEditable);
