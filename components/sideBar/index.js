import React, { useContext } from "react";
import Link from "next/link";
import { SbContainer, SbLink, SbItemSpan, Close, NavLang } from "./styles";
import {
  Person,
  ChatDots,
  Diagram3,
  PencilSquare,
  InfoCircle,
} from "react-bootstrap-icons";
import { SideBarContext, SideBarDispatch } from "../../context/sideBar.context";

const SideBar = () => {
  const { navState } = useContext(SideBarContext);
  const { toggleNav } = useContext(SideBarDispatch);

  return (
    <SbContainer className={`${navState ? "active" : ""}`}>
      <Close onClick={() => toggleNav(!navState)}>&times;</Close>
      <Link href="/profile">
        <SbLink>
          <Person size={22} />
          <SbItemSpan>Профиль</SbItemSpan>
        </SbLink>
      </Link>
      <Link href="/authenticate">
        <SbLink>
          <ChatDots size={22} />
          <SbItemSpan>Сообщения</SbItemSpan>
        </SbLink>
      </Link>
      <Link href="/sitemap">
        <SbLink>
          <Diagram3 size={22} />
          <SbItemSpan>Карта сайта</SbItemSpan>
        </SbLink>
      </Link>
      <Link href="/privacy-policy">
        <SbLink>
          <PencilSquare size={22} />
          <SbItemSpan>
            Правила и<br />
            Условия
          </SbItemSpan>
        </SbLink>
      </Link>
      <Link href="/about">
        <SbLink>
          <InfoCircle size={22} />
          <SbItemSpan>О нас</SbItemSpan>
        </SbLink>
      </Link>
      <NavLang>
        <span className="optLang">UK</span>
        <div>&#124;</div>
        <span>RU</span>
      </NavLang>
    </SbContainer>
  );
};

export default SideBar;
