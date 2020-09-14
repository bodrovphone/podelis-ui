import React from 'react'
import { CategoriesStyled, ImageWrapper, Mask } from './styles';
import { translate } from '../../localization/categories';
import GifPlayer from '../../components/gifPlayer';

const CategoryWidget = ({ categories }) => (
  <CategoriesStyled>
    <Mask>
    {
      categories.map((cat, index) => (
        <ImageWrapper key={index}>
          <GifPlayer gif={`/static/img/categories/${cat}.gif`} 
          still={`/static/img/categories/${cat}.png`} />
          <span>{translate[cat]['ru']}</span>
        </ImageWrapper>
      ))
    }
    </Mask>
  </CategoriesStyled>
);

export default CategoryWidget;