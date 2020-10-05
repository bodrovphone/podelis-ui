import React from 'react';
import { ButtonStyled, LoadMoreStyled } from './styles';

const LoadMore = () => (
  <LoadMoreStyled>
    <ButtonStyled>
      <span>
        Показать еще
        <i>
          &gt;&gt;
        </i>
      </span>
    </ButtonStyled>
  </LoadMoreStyled>
);

export default LoadMore;