import React from "react";
import "@testing-library/jest-dom/extend-expect";
import defaultTopPosts from "../components/cardsWidget/defaultTopPosts";

// not sure if I need this mock any longer?

import { render, fireEvent } from "./config/test-utils";
import Home, { getStaticProps } from "../pages/index";

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

  it("should render cardsWidget", async () => {
    const { getByTestId } = render(<Home prokats={defaultTopPosts} />);
    const cardsWidget = getByTestId("cardsWidget");

    expect(cardsWidget).toBeInTheDocument();
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

describe("getStaticProps", () => {
  it("should return array of prokats with specific fields and their types", async () => {
    const { props } = await getStaticProps();
    expect(props).toMatchObject({ prokats: expect.any(Array) });

    const singleProkat = props.prokats[0];

    //   {
    //     "_id" : "60e434c26aae48c2dbb9c55b",
    //     "title" : "Рука Лицо",
    //     "description" : "Отличное лица да и рука тоже сойдет.",
    //     "price" : 500,
    //     "period" : 4,
    //     "units" : false,
    //     "conditions" : [
    //         "deposit"
    //     ],
    //     "deposit" : 5000,
    //     "pledge" : "",
    //     "city" : "Днипро",
    //     "files" : ["data:url"
    //     ],
    //     "dateCreated" : "2021-07-06"
    // }

    expect(singleProkat).toMatchObject({
      _id: expect.any(String),
      title: expect.any(String),
      description: expect.any(String),
      price: expect.any(Number),
      period: expect.any(Number),
      units: expect.any(Boolean),
      conditions: expect.any(Array),
      deposit: expect.any(Number),
      pledge: expect.any(String),
      city: expect.any(String),
      files: expect.any(Array),
      dateCreated: expect.any(String),
    });
  });
});
