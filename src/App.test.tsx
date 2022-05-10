import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders header1", () => {
  render(<App />);
  const linkElement = screen.getByText("Alang Blog");
  expect(linkElement).toBeInTheDocument();
});
