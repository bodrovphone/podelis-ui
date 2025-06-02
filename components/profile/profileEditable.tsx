import React, { useState } from "react";
import ST from "./styles";
import { withTheme } from "styled-components";
import LT from "../layouts";
import { Camera, Pencil } from "react-bootstrap-icons";

interface ProfileEditableProps {
  name: string;
  avatarUrl?: string;
  theme: any; // Injected by withTheme
  [key: string]: any;
}

interface ProfileEditableState {
  name: string;
  size: number;
  tel: string;
  city: string;
  [key: string]: any; // To allow for dynamic properties like [target.name === "name" && "size"]
}

const ProfileEditable = ({
  name,
  avatarUrl = "http://www.gravatar.com/avatar/?d=mp",
  theme,
}: ProfileEditableProps) => {
  const [state, setState] = useState<ProfileEditableState>({
    name,
    size: name.length + 1,
    tel: "телефон",
    city: "город",
  });

  const handleChange = ({ target }: { target: any }) => {
    setState((prevState) => ({ // Use functional update for safety
      ...prevState,
      [target.name]: target.value,
      // Conditional property update needs care; ensure 'size' is part of state if always needed
      // or handle this logic more explicitly if 'size' should only exist conditionally.
      // For simplicity with 'any', this might pass, but in stricter TS, this is tricky.
      ...(target.name === "name" && { size: target.value.length + 5 }),
    }));
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
