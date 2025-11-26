import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import HomeCard from "../HomeCard/HomeCard";

test("renders the title and the category passed via props", () => {
  render(<HomeCard name="Test" category="Form" image="button" />);
  const titleElement = screen.getByText("Test");
  const categoryElement = screen.getByText("Form");

  expect(titleElement).toBeDefined();
  expect(categoryElement).toBeDefined();
});

test("renders the image passed via props", () => {
  render(<HomeCard name="Test" category="Form" image="button" />);
  const imageElement = screen.getAllByAltText("button_img")[0];

  expect(imageElement).toBeDefined();
});
