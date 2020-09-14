import styled, { keyframes } from 'styled-components';

export const swipeRight = ( pointOne, pointTwo, pointLast = 0 ) => {
  return keyframes`
 
  0% {
    transform: translateX(0);
  }

  45% {
    transform: translateX(${pointOne});
  }

  50% {
    transform: translateX(${pointTwo});
  }

  100% {
    transform: translateX(${pointLast});
  }

`;
}