import React, { useState } from "react";
import {
  ProfileWrapper_ST,
  Avatar_ST,
  AvatarContainer_ST,
  Field_ST,
  Input_ST,
  Image_ST,
  Overlay_ST,
  ContactInfo_ST,
} from "./styles";
import { withTheme } from "styled-components";
import { H2, Button } from "../layouts";
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
    <ProfileWrapper_ST>
      <H2>Профиль</H2>
      <Avatar_ST>
        <AvatarContainer_ST>
          <Image_ST src={avatarUrl} />
          <Overlay_ST>
            <span>
              <Camera size={26} fill={theme.colors.mediumRare} />
            </span>
          </Overlay_ST>
        </AvatarContainer_ST>
      </Avatar_ST>
      <ContactInfo_ST>
        <Field_ST>
          <Pencil />
          <Input_ST
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            maxLength="18"
            size={state.size}
          />
        </Field_ST>
        <Field_ST>
          <Pencil />
          <Input_ST
            type="tel"
            name="tel"
            pattern="^((\+)?3?8)?0[1-9]{2}[0-9 ]{7}"
            value={state.tel}
            onChange={handleChange}
            maxLength="18"
            size={14}
          />
        </Field_ST>
        <Field_ST>
          <Pencil />
          <Input_ST
            type="text"
            name="city"
            value={state.city}
            onChange={handleChange}
            maxLength="18"
            size={18}
          />
        </Field_ST>
      </ContactInfo_ST>
      <Button type="button">
        <span>
          Сохранить
          <i>&gt;&gt;</i>
        </span>
      </Button>
    </ProfileWrapper_ST>
  );
};

export default withTheme(ProfileEditable);
