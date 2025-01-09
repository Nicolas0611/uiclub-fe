import { LinkItemProps } from "@/interfaces/link-item-interface";
import Link from "next/link";
import React from "react";

const LinkButton = ({ path, title, variant }: LinkItemProps) => {
  const buttonVariantStyles = {
    contained: "bg-primary text-white",
    outlined: "border-2 border-primary text-primary",
  }[variant || "contained"];
  return (
    <Link
      href={path}
      className={`
      ${buttonVariantStyles} flex gap-2 py-3 px-6 rounded-md hover:bg-primary_dark hover:text-white transition ease-linear duration-150
      `}
    >
      <p className="d-flex items-center">{title}</p>
    </Link>
  );
};

export default LinkButton;
