import React, { useContext } from "react";
import { SideBarContext } from "../../context/sideBar.context";
import Link from "next/link";
// https://icons.getbootstrap.com/#usage
import ST from "./styles";
import {
  HouseDoor,
  Heart,
  ArrowUpCircle,
  Search,
  Person,
  ChatDots,
} from "react-bootstrap-icons";
import SideBar from "../sideBar";

const TopNav = () => {
  const { navState, toggleNav } = useContext(SideBarContext);
  return (
    <>
      <ST.LinksWrapper>
        <ST.Nav>
          <Link href="/">
            <ST.NavItemLink className="navHome">
              <HouseDoor />
              <ST.NavItemSpan className="navHomeSpan">Главная</ST.NavItemSpan>
            </ST.NavItemLink>
          </Link>
          <Link href="/favourites">
            <ST.NavItemLink>
              <Heart />
              <ST.NavItemSpan>Закладки</ST.NavItemSpan>
            </ST.NavItemLink>
          </Link>
          <Link href="/add">
            <ST.NavItemLink>
              <ArrowUpCircle />
              <ST.NavItemSpan>Добавить</ST.NavItemSpan>
            </ST.NavItemLink>
          </Link>

          <Link href="/search">
            <ST.NavItemLink className="navSearch">
              <Search />
              <ST.NavItemSpan>Поиск</ST.NavItemSpan>
            </ST.NavItemLink>
          </Link>

          <Link href="/profile">
            <ST.NavItemLink className="navProfile">
              <Person />
              <ST.NavItemSpan>Профиль</ST.NavItemSpan>
            </ST.NavItemLink>
          </Link>
          <Link href="/messages">
            <ST.NavItemLink className="navMessages">
              <ChatDots />
              <ST.NavItemSpan>Сообщения</ST.NavItemSpan>
            </ST.NavItemLink>
          </Link>
          <ST.NavItemLink
            className="NavMenu"
            onClick={() => toggleNav(!navState)}
          >
            <ST.ListIcon />
          </ST.NavItemLink>
        </ST.Nav>
      </ST.LinksWrapper>
      <SideBar />
    </>
  );
};

export default TopNav;
