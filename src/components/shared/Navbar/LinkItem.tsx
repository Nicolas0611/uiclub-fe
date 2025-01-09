"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

interface LinkItemProps {
  path: string;
  icon: JSX.Element;
  title: string;
}
const LinkItem = ({ path, icon, title }: LinkItemProps) => {
  const currentPath = usePathname();
  const isActivePath = currentPath === path;
  return (
    <Link
      href={path}
      className={`
         flex gap-2 py-2 px-6 rounded-md hover:bg-primary_dark hover:text-white transition ease-linear duration-150
          ${isActivePath ? "bg-primary text-white" : ""}
        `}
    >
      <div>{isActivePath && icon}</div>
      <p>{title}</p>
    </Link>
  );
};

export default LinkItem;
