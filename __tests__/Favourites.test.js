import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { render, fireEvent } from "./config/test-utils";
import Favourites from "../pages/favourites";

describe("Favourites Page all components renders", () => {
  // using container here for demonstration purpose mostly...
  it("should render H1 tag with Zadelis, nav and footer", () => {
    const { container } = render(<Favourites />);
    const heading = container.querySelector("h1");
    expect(heading).toHaveTextContent("Zadelis");

    const nav = container.querySelector("nav");
    const footer = container.querySelector("footer");
    expect(nav).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it("should render Tabs component", () => {
    const { getByTestId } = render(<Favourites />);
    const tabs = getByTestId("tabs");
    expect(tabs).toBeInTheDocument();
  });

  it("should render FavSearches component", () => {
    const { getByTestId, container } = render(<Favourites />);
    const search = container.querySelector("li:last-of-type");
    fireEvent.click(search);
    const tabs = getByTestId("favSearches");
    expect(tabs).toBeInTheDocument();
  });
});

describe("Favourites Page behavior", () => {
  it("click on the menu should expand sidebar", () => {
    const { container } = render(<Favourites />);
    const menu = container.querySelector(".NavMenu");
    fireEvent.click(menu);

    const sideBar = container.querySelector(".active");

    expect(sideBar).toBeInTheDocument();
  });
});
