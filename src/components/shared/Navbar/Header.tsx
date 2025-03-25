"use client";

import { LINKS } from "@/constants";
import {
  Button,
  Chip,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { usePathname } from "next/navigation";

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
      <NavbarContent className="hidden gap-8 md:flex" justify="center">
        {LINKS.map((link) => (
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
        <NavbarMenuToggle className=" md:hidden" />

        <NavbarItem>
          <Button as={Link} href="/roadmap" color="primary" variant="solid">
            Road map ✨
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {LINKS.map((link, index) => (
          <NavbarMenuItem key={`${link}-${index}`}>
            <Link
              className="w-full"
              color={link.path === currentPath ? "primary" : "foreground"}
              href={link.path}
              size="lg"
            >
              {link.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
