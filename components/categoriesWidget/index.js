import React from "react";
import { Categories_ST, Image_ST, Mask_ST } from "./styles";
import { translate } from "../../localization/categories";
import GifPlayer from "../gifPlayer";

const CategoriesWidget = ({ categories }) => (
  <Categories_ST>
    <Mask_ST>
      {categories.map((cat, index) => (
        <Image_ST key={index}>
          <GifPlayer
            gif={`img/categories/${cat}.gif`}
            still={`img/categories/${cat}.png`}
          />
          <span>{translate[cat]["ru"]}</span>
        </Image_ST>
      ))}
    </Mask_ST>
  </Categories_ST>
);

export default CategoriesWidget;
