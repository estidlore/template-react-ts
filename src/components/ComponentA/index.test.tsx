import { render, screen } from "@testing-library/react";
import React from "react";

import { ComponentA } from ".";

describe("ComponentA", () => {
  it("Display the example text", () => {
    expect.assertions(1);
    render(<ComponentA />);
    expect(screen.getByText("Component A")).toBeInTheDocument();
  });
});
