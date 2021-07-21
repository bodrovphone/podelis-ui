import React from "react";
import "@testing-library/jest-dom/extend-expect";

// not sure if I need this mock any longer?
import { mockResolvedValue } from "./config/mocks";

import { render, cleanup, fireEvent } from "./config/test-utils";
import Home from "../pages/index";

afterEach(cleanup);

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue(),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Home Page all components renders", () => {
  // using container here for demonstration purpose mostly...
  it("should render H1 tag with Zadelis", () => {
    const { container } = render(<Home />);
    const heading = container.querySelector("h1");
    expect(heading).toHaveTextContent("Zadelis");
  });

  it("should render categories widget", () => {
    const { getByTestId } = render(<Home />);
    const categoriesWidget = getByTestId("cat-widget");
    expect(categoriesWidget).toBeInTheDocument();
  });

  it("should render searchbar", () => {
    const { getByTestId } = render(<Home />);

    const searchbar = getByTestId("searchbar");

    expect(searchbar).toBeInTheDocument();
  });

  it("should render cardsWidget", () => {
    const { getByTestId } = render(<Home />);

    const searchbar = getByTestId("cardsWidget");

    expect(searchbar).toBeInTheDocument();
  });

  it("should render loadMore button", () => {
    const { getByTestId } = render(<Home />);

    const searchbar = getByTestId("loadMore");

    expect(searchbar).toBeInTheDocument();
  });

  it("should render aboutZadelis", () => {
    const { getByTestId } = render(<Home />);

    const searchbar = getByTestId("aboutZadelis");

    expect(searchbar).toBeInTheDocument();
  });

  it("should render getSocial", () => {
    const { getByTestId } = render(<Home />);

    const searchbar = getByTestId("getSocial");

    expect(searchbar).toBeInTheDocument();
  });

  it("should render footer", () => {
    const { getByTestId } = render(<Home />);

    const searchbar = getByTestId("footer");

    expect(searchbar).toBeInTheDocument();
  });
});

describe("Home Page behavior", () => {
  it("click on the menu should expand sidebar", () => {
    const { container } = render(<Home />);
    const menu = container.querySelector(".NavMenu");
    fireEvent.click(menu);

    const sideBar = container.querySelector(".active");

    expect(sideBar).toBeInTheDocument();
  });
});
