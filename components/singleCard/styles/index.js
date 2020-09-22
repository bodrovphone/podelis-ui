import styled from 'styled-components';
import { device } from '../../styles/media';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 5px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  line-height: 1.4em;
  height: 3.8em;
  position: relative;
  font-size: 0.8em;

    &:after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 1.2em;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
  }
`;

export const CardImage = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

export const CardTitle = styled.h3`
  font-size: .9em;
  font-weight: 500;
  vertical-align: bottom; 
  margin: 5px 0;
  
  line-height: 1.2em;
  height: 2.4em;

  overflow: hidden;
  position: relative;

  &:after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 1.2em;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%);
  }
  
`;