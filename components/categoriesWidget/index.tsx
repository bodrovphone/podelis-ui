import React from "react";
import { translate } from "../../localization/categories";
import GifPlayer from "../gifPlayer";

interface CategoriesWidgetProps {
  categories: any[];
  [key: string]: any; // For other props
}

const CategoriesWidget = ({ categories, ...props }: CategoriesWidgetProps) => (
  <div
    {...props}
    className="w-full mb-5 overflow-scroll font-['podelis-font'] no-scrollbar"
  >
    <div className="overflow-scroll flex w-[205%] justify-between animate-swipeS mobileXL:w-[120%] mobileXL:animate-swipeM md:animate-none md:w-full md:justify-around no-scrollbar">
      {categories.map((cat: any, index: number) => (
        <div key={index} className="flex flex-col items-center category-image-item">
          <GifPlayer
            gif={`/img/categories/${cat}.gif`}
            still={`/img/categories/${cat}.png`}
            className="rounded-full w-[90px] h-[90px] bg-medium" // Default background
          />
          <span>{(translate as any)[cat]["ru"]}</span>
        </div>
      ))}
    </div>
  </div>
);

export default CategoriesWidget;
