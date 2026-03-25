import { ChipProps } from "@heroui/react";

export const LINKS = [
  {
    path: "/blog",
    title: "Blog",
    isDisabled: true,
  },
  {
    path: "/figma",
    title: "Figma",
    isDisabled: false,
  },
  {
    path: "/components",
    title: "Components",
    isDisabled: false,
  },
  {
    path: "/design-systems",
    title: "Design Systems",
    isDisabled: false,
  },
];

export const COMPONENT_TYPES = [
  {
    label: "Overlays",
    value: "Overlays",
  },
  {
    label: "Data",
    value: "Data",
  },
  {
    label: "Input",
    value: "Input",
  },
  {
    label: "Status",
    value: "Status",
  },
  {
    label: "Navigation",
    value: "Navigation",
  },
  {
    label: "Loading",
    value: "Loading",
  },
  {
    label: "Messaging",
    value: "Messaging",
  },
  {
    label: "Action",
    value: "Action",
  },
  {
    label: "Images",
    value: "Images",
  },
  {
    label: "Layout",
    value: "Layout",
  },
  {
    label: "Form",
    value: "Form",
  },
];

export const ROLES = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "User",
    value: "user",
  },
];

export const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
};
