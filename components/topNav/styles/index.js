import styled, { keyframes } from 'styled-components';
import { device } from '../../styles/media';
import { List } from 'react-bootstrap-icons';
import { rotate } from '../../styles/animations';


// Base elements
export const Nav = styled.nav`
  width: 100%;
  padding: 10px 0;
  color: white;
  display: grid;
  grid-template-columns: 4fr 4fr 4fr 4fr 2fr;
  margin: 0 auto;

  @media ${device.mobileXL} { 
    max-width: 90%;
  }

  @media ${device.laptop} { 
    max-width: 80%;
  }
`;

export const LinksWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${props => props.theme.main.colors.skyBlue};
  background: ${props => props.theme.main.gradinets.skyBlueToWhite};

  @media ${device.mobileXL} { 
    top: 0px;
    bottom: unset;
    background: ${props => props.theme.main.colors.skyBlue};
    background: ${props => props.theme.main.gradinets.skyWhiteToBlue};
  }
`;

export const NavItemLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  &.NavMenu {
    align-self: center;
    /* animation: ${rotate} 2s linear infinite; */
  }

  &:not(:last-of-type) svg {
    width: 18px;
    height: 18px;
    fill: ${props => props.theme.main.colors.black};

    @media ${device.laptop} { 
      width: 26px;
      height: 26px;
    }
  }

  @media ${device.mobileXL} { 
   flex-direction: column-reverse;
  }

`;

export const NavItemSpan = styled.span`
  display: block;
  color: ${props => props.theme.main.colors.black};
  font-size: 0.8em;
  margin-top: 3px;

  @media ${device.mobileXL} { 
   padding-bottom: 5px;
   font-size: 1em;
  }
`;


// Icons

export const ListIcon = styled(List)`
  width: 21px;
  height: 21px;
  fill: ${props => props.theme.main.colors.black};
  align-self: center;
  
  @media ${device.laptop} { 
    width: 26px;
    height: 26px;
    }
`;