import { render, screen } from "@testing-library/react";
import React from "react";

import { App } from "./App";

describe("App", () => {
  it("Display the header", () => {
    render(<App />);
    expect(screen.getByText("Template React TS SASS")).toBeInTheDocument();
  });
});
