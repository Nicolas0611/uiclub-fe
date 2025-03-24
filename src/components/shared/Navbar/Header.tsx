"use client";

import {
  Button,
  Chip,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import { usePathname } from "next/navigation";

const links = [
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/news",
    title: "News",
  },
  {
    path: "/latest",
    title: "Latest",
  },
  {
    path: "/design-systems",
    title: "Design Systems",
  },
];
const Header = () => {
  const currentPath = usePathname();

  return (
    <Navbar maxWidth="xl" isBlurred={true}>
      <NavbarBrand className="flex items-end gap-2">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={130} />
        </Link>
        <Chip size="sm" color="secondary" variant="flat">
          {process.env.NEXT_PUBLIC_VERSION}
        </Chip>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {links.map((link) => (
          <NavbarItem
            isActive={link.path === currentPath}
            className="text-purple-800"
            aria-current="page"
            key={link.path}
          >
            <Link
              color={link.path === currentPath ? "primary" : "foreground"}
              href={link.path}
            >
              {link.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="/roadmap" color="primary" variant="solid">
            Road map ✨
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
