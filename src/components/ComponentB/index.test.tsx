import { render, screen } from "@testing-library/react";
import React from "react";

import { ComponentB } from ".";

describe("ComponentB", () => {
  it("Display the example text", () => {
    render(<ComponentB />);
    expect(screen.getByText("Component B")).toBeInTheDocument();
  });
});
