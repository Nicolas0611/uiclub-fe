import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import BrowserMock from "../BrowserMock/BrowserMock";
import HomeCard from "../HomeCard/HomeCard";

const COMPONENTS_TEST = [
  { name: "Avatar", category: "Action", image: "Avatar" },
  { name: "Chip", category: "Status", image: "Chip" },
  { name: "Button", category: "Action", image: "Button" },
];

test("renders the BrowserMock 3 cards with the name, category and image ", () => {
  render(
    <BrowserMock components={COMPONENTS_TEST}>
      {(comp) => <HomeCard {...comp} />}
    </BrowserMock>
  );
  COMPONENTS_TEST.forEach((comp) => {
    const nameElement = screen.getByText(comp.name);
    const imageElement = screen.getByAltText(`${comp.image}_img`);

    expect(nameElement).toBeDefined();
    expect(imageElement).toBeDefined();
  });
});
