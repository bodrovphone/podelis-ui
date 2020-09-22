import styled from 'styled-components';
import { device } from '../../styles/media';

export const CardsStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 10px;
`;