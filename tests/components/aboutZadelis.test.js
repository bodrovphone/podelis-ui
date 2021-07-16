import React from "react";
import "@testing-library/jest-dom/extend-expect";
// Using render and screen from test-utils.js instead of
// @testing-library/react

import { render, screen } from "../test-utils";
import AboutZadelis from "../../components/aboutZadelis";

describe("AboutZadelis", () => {
  it("should render AboutZadelis", () => {
    render(<AboutZadelis />);

    const heading = screen.getByText(
      /Zadils - Простой и удобный шаринг-сервис\./i
    );

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toMatchSnapshot();
    // .toBeInTheDocument();
  });
});
