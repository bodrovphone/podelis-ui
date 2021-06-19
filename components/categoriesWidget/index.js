import React from "react";
import ST from "./styles";
import { translate } from "../../localization/categories";
import GifPlayer from "../gifPlayer";

const CategoriesWidget = ({ categories }) => (
  <ST.Categories>
    <ST.Mask>
      {categories.map((cat, index) => (
        <ST.Image key={index}>
          <GifPlayer
            gif={`/img/categories/${cat}.gif`}
            still={`/img/categories/${cat}.png`}
          />
          <span>{translate[cat]["ru"]}</span>
        </ST.Image>
      ))}
    </ST.Mask>
  </ST.Categories>
);

export default CategoriesWidget;
