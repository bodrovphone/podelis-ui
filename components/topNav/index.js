import React, { useContext } from 'react';
import { SideBarContext, SideBarDispatch } from '../context/sideBar.context';
import Link from 'next/link';
// https://icons.getbootstrap.com/#usage
import { NavItemLink,
         Nav, 
         NavItemSpan, 
         LinksWrapper,
         ListIcon } from './styles';
import { HouseDoor,
         Heart,
         ArrowUpCircle,
         Search,
         Person,
         ChatDots } from 'react-bootstrap-icons';
import SideBar from '../sideBar';

const TopNav = () => {
  const navState = useContext(SideBarContext);
  const toggle = useContext(SideBarDispatch);
  return (
    <>
      <LinksWrapper>
        <Nav>
          <Link href="/test">
            <NavItemLink className="navHome"><HouseDoor/>
              <NavItemSpan className="navHomeSpan">Главная</NavItemSpan>
            </NavItemLink>
          </Link>
          <Link href="/test">
            <NavItemLink><Heart/>
              <NavItemSpan>Закладки</NavItemSpan></NavItemLink>
          </Link>
          <Link href="/">
            <NavItemLink><ArrowUpCircle/>
              <NavItemSpan>Добавить</NavItemSpan></NavItemLink>
          </Link>
          <Link href="/">
            <NavItemLink className="navSearch"><Search/>
              <NavItemSpan>Поиск</NavItemSpan></NavItemLink>
          </Link>
          <Link href="/">
            <NavItemLink className="navProfile"><Person/>
              <NavItemSpan>Профиль</NavItemSpan></NavItemLink>
          </Link>
          <Link href="/">
            <NavItemLink className="navMessages"><ChatDots/>
              <NavItemSpan>Сообщения</NavItemSpan></NavItemLink>
          </Link>
          <NavItemLink className='NavMenu' onClick={() => toggle(!navState)}>
            <ListIcon/>
          </NavItemLink>
        </Nav>
      </LinksWrapper>
      <SideBar />
    </>
)};

export default TopNav;

