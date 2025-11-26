import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import HomePill from "../HomePill/HomePill";

test("renders the title text passed via props", () => {
  render(<HomePill title="Text" />);
  const titleElement = screen.getByText("Text");
  expect(titleElement).toBeDefined();
});
