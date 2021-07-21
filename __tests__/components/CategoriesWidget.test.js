import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render } from "../config/test-utils";
import CategoriesWidget from "../../components/aboutZadelis";

describe("CategoriesWidget", () => {
  it("should render at least 4 images", () => {
    const { container } = render(<CategoriesWidget />);

    const images = container.querySelectorAll("img");
    // what screen size does render method simulate? I choose 4 here in fact it's six
    expect(images.length).toBeGreaterThan(4);
  });
});
