import Link from 'next/link';
// https://icons.getbootstrap.com/#usage
import { NavItemLink,
         Nav, 
         NavItemSpan, 
         LinksWrapper,
         ListIcon,ArrowIcon,HeartIcon, HouseIcon, SearchIcon} from './styles';
import theme from '../styles/theme';
import { HouseDoor, Heart, ArrowUpCircle, Search } from 'react-bootstrap-icons';



const TopNav = (props) => (
    <LinksWrapper>
      <Nav>
        <Link href="/test">
          <NavItemLink><HouseDoor/>
          <NavItemSpan>Главная</NavItemSpan>
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
          <NavItemLink><Search/>
            <NavItemSpan>Поиск</NavItemSpan></NavItemLink>
        </Link>
        <NavItemLink className='NavMenu'>
          <ListIcon/>
        </NavItemLink>
      </Nav>
    </LinksWrapper>
);

export default TopNav;