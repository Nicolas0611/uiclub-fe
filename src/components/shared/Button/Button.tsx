import { Button as HeroButton } from "@heroui/react";
import Link from "next/link";

export interface ButtonProps {
  path?: string;
  title: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
}
const Button = ({
  path,
  title,
  color = "primary",
  variant = "solid",
}: ButtonProps) => {
  return (
    <HeroButton as={Link} href={path} color={color} variant={variant}>
      {title}
    </HeroButton>
  );
};

export default Button;
