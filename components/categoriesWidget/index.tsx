import React from "react";
import ST from "./styles";
import { translate } from "../../localization/categories";
import GifPlayer from "../gifPlayer";

interface CategoriesWidgetProps {
  categories: any[];
  [key: string]: any; // For other props
}

const CategoriesWidget = ({ categories, ...props }: CategoriesWidgetProps) => (
  <ST.Categories {...props}>
    <ST.Mask>
      {categories.map((cat: any, index: number) => (
        <ST.Image key={index}>
          <GifPlayer
            gif={`/img/categories/${cat}.gif`}
            still={`/img/categories/${cat}.png`}
          />
          <span>{(translate as any)[cat]["ru"]}</span>
        </ST.Image>
      ))}
    </ST.Mask>
  </ST.Categories>
);

export default CategoriesWidget;
