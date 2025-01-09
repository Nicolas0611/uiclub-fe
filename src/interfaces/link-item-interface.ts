import { JSX } from "react";

export interface LinkItemProps {
  path: string;
  icon?: JSX.Element;
  title: string;
  variant?: "contained" | "outlined";
}
