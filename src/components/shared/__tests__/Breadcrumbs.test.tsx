import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";

test("renders the Breadcrumb component with an actual page", () => {
  render(<Breadcrumb actualPage="Design" />);

  const activePage = screen.getByText("Design");
  expect(activePage).toBeDefined();
});
