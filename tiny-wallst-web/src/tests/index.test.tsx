import React from "react";
import App from "../pages";
import {
  fireEvent,
  getByTestId,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import renderer from "react-test-renderer";
import { companiesWithPriceAndVolatility } from "./data/companies-data";

describe("Index page", () => {
  it("renders the heading company overview", () => {
    render(<App companies={[]} />);

    const heading = screen.getByRole("heading", {
      name: /Company Overview/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders the navbar", () => {
    render(<App companies={[]} />);

    const heading = screen.getByText(/Tiny Wall Street/i);

    expect(heading).toBeInTheDocument();
  });

  it("renders the footer", () => {
    render(<App companies={[]} />);

    const heading = screen.getByText(/Vincent Tsai/i);

    expect(heading).toBeInTheDocument();
  });

  it("renders homepage unchanged", () => {
    const tree = renderer.create(<App companies={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders homepage with all companies", () => {
    const tree = renderer
      .create(<App companies={companiesWithPriceAndVolatility} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
