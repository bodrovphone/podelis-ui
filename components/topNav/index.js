import Link from 'next/link';
import {
  Navbar,
  Nav,
  NavDropdown } from 'react-bootstrap';
import { HouseDoor, Heart, ArrowUpCircle, Search } from 'react-bootstrap-icons';
// https://icons.getbootstrap.com/#usage
import styles from './styles';
import themes from '../styles/theme';
const { black } = themes.main.colors;

const TopNav = () => (
  <Navbar fixed='bottom' expand="true" style={styles.Navbar}>
    <Link href="/test">
      <a style={styles.NavbarItemLink}><HouseDoor color={black} size={18}/>
      <span style={styles.NavbarItem}>Главная</span>
      </a>
    </Link>
    <Link href="/test">
      <a style={styles.NavbarItemLink}><Heart color={black} size={18}/>
        <span style={styles.NavbarItem}>Закладки</span></a>
    </Link>
    <Link href="/">
      <a style={styles.NavbarItemLink}><ArrowUpCircle color={black} size={18}/>
        <span style={styles.NavbarItem}>Добавить</span></a>
    </Link>
    <Link href="/">
      <a style={styles.NavbarItemLink}><Search color={black} size={18}/>
        <span style={styles.NavbarItem}>Поиск</span></a>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default TopNav;