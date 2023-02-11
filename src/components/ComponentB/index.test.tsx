import { render, screen } from "@testing-library/react";
import React from "react";

import { ComponentB } from ".";

describe("ComponentB", () => {
  it("Display the example text", () => {
    expect.assertions(1);
    render(<ComponentB />);
    expect(screen.getByText("Component B")).toBeInTheDocument();
  });
});
