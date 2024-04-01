import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {
  it("renders child components", () => {
    render(<App />);
    const header = screen.getByTestId("header"); // Replace with your actual component names
    const main = screen.getByTestId("main");
    const footer = screen.getByTestId("footer");

    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
