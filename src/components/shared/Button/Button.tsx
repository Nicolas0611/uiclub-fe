import { Button as HeroButton } from "@heroui/react";
import Link from "next/link";

interface LinkWrapperProps {
  children: React.ReactNode;
  path: string | undefined;
}

const LinkWrapper = ({ children, path }: LinkWrapperProps) => {
  return path ? <Link href={path}>{children}</Link> : <>{children}</>;
};

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
    <LinkWrapper path={path}>
      <HeroButton color={color} variant={variant}>
        {title}
      </HeroButton>
    </LinkWrapper>
  );
};

export default Button;
