import themes from '../styles/theme';
const { grey, black } = themes.main.colors;

const styles = {
  Navbar: {
    width: '100%',
    paddingTop: '10px',
    backgroundColor: grey,
    color: 'white',
    display: 'grid'
  },
  Nav: {
    flexDirection: 'row'
  },
  NavbarItem: {
    display: 'block',
    color: black
  },
  NavbarItemLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}

export default styles;