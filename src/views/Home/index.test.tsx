import { render, screen } from "@testing-library/react";
import React from "react";

import { Home } from ".";

describe("Home", () => {
  it("Display the welcome text", () => {
    render(<Home />);
    expect(screen.getByText("Welcome to this template")).toBeInTheDocument();
  });
});
