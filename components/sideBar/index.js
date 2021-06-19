import React, { useContext } from "react";
import Link from "next/link";
import ST from "./styles";
import {
  Person,
  ChatDots,
  Diagram3,
  PencilSquare,
  InfoCircle,
} from "react-bootstrap-icons";
import { SideBarContext, SideBarDispatch } from "../../context/sideBar.context";
import ThemeSwitcher from "../themeSwitcher";

const SideBar = () => {
  const { navState } = useContext(SideBarContext);
  const { toggleNav } = useContext(SideBarDispatch);

  return (
    <ST.SbContainer className={`${navState ? "active" : ""}`}>
      <ST.Close onClick={() => toggleNav(!navState)}>&times;</ST.Close>
      <Link href="/profile">
        <ST.SbLink>
          <Person size={22} />
          <ST.SbItemSpan>Профиль</ST.SbItemSpan>
        </ST.SbLink>
      </Link>
      <Link href="/messages">
        <ST.SbLink>
          <ChatDots size={22} />
          <ST.SbItemSpan>Сообщения</ST.SbItemSpan>
        </ST.SbLink>
      </Link>
      <Link href="/sitemap">
        <ST.SbLink>
          <Diagram3 size={22} />
          <ST.SbItemSpan>Карта сайта</ST.SbItemSpan>
        </ST.SbLink>
      </Link>
      <Link href="/privacy-policy">
        <ST.SbLink>
          <PencilSquare size={22} />
          <ST.SbItemSpan>
            Правила и<br />
            Условия
          </ST.SbItemSpan>
        </ST.SbLink>
      </Link>
      <Link href="/about">
        <ST.SbLink>
          <InfoCircle size={22} />
          <ST.SbItemSpan>О нас</ST.SbItemSpan>
        </ST.SbLink>
      </Link>
      <ThemeSwitcher />
      <ST.NavLang>
        <span className="optLang">UK</span>
        <div>&#124;</div>
        <span>RU</span>
      </ST.NavLang>
    </ST.SbContainer>
  );
};

export default SideBar;
