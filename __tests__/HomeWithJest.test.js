import React from "react";
import "@testing-library/jest-dom/extend-expect";
// Using render and screen from test-utils.js instead of
// @testing-library/react

import { render, screen } from "./config/test-utils";
import Home from "../pages/index";

describe("AboutZadelis", () => {
  it("should render AboutZadelis", () => {
    const { getByText } = render(<Home />);

    const heading = getByText(/Zadils/i);

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument();
    // .toBeInTheDocument();
  });
});
