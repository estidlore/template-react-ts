import { render, screen } from "@testing-library/react";
import React from "react";

import { Home } from ".";

describe("Home", () => {
  it("Display the welcome text", () => {
    expect.assertions(1);
    render(<Home />);
    expect(screen.getByText("Welcome to this template")).toBeInTheDocument();
  });
});
