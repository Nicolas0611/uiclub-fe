"use client";

import {
  Button,
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
      <NavbarBrand>
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={130} height={130} />
        </Link>
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
