import react, { useState } from 'react';
import Link from 'next/link';
// https://icons.getbootstrap.com/#usage
import { NavItemLink,
         Nav, 
         NavItemSpan, 
         LinksWrapper,
         ListIcon, NavLang } from './styles';
import { HouseDoor, Heart, ArrowUpCircle, Search, Person, ChatDots } from 'react-bootstrap-icons';
import SideBar from '../sideBar';



const TopNav = (props) => {
  const [isActive, setActive] = useState(false);
  return (
  <>
    <LinksWrapper>
      <Nav>
        <NavLang>
          <span>Uk</span>
          {/* <span>Ru</span> */}
        </NavLang>
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
        <NavItemLink className='NavMenu' onClick={() => setActive(!isActive)}>
          <ListIcon/>
        </NavItemLink>
      </Nav>
    </LinksWrapper>
    <SideBar setActive={setActive} isActive={isActive} className={`${!isActive ? 'active' : ''}`} />
    </>
)};

export default TopNav;