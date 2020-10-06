import styled from 'styled-components';
import { device } from '../../styles/media';

export const LoadMoreStyled = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

export const ButtonStyled = styled.button`
  display: inline-block;
  padding: 10px 18px;
  font-size: 16px;
  font-family: 'zadelis-font';
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: black;
  background-color: ${props => props.theme.colors.solt};
  border: 2px solid ${props => props.theme.colors.mediumWell};;
  border-radius: 0 10px 0 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  
  span {
    position: relative;
    transition: all 0.5s;
  }

  span i {
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  :hover {
    border: 2px solid ${props => props.theme.colors.solt};;
    background-color: ${props => props.theme.colors.mediumWell};
  }

  :hover span {
    padding-right: 25px;
  }
  
  :hover span i {
    opacity: 1;
    right: 0;
  }

  :active {
    background-color: ${props => props.theme.colors.mediumWell};
    box-shadow: 0 11px 5px 0 rgba(0,0,0,0.2);
    transform: translateY(4px);
    outline: none;
  }

`;
