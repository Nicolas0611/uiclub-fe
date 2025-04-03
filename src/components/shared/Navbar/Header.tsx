"use client";

import { LINKS } from "@/constants";
import {
  Badge,
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
            <Badge
              color="primary"
              showOutline={false}
              content="soon"
              size="sm"
              isInvisible={!link.isDisabled}
              variant="shadow"
            >
              <Link
                color={link.path === currentPath ? "primary" : "foreground"}
                href={link.path}
                isDisabled={link.isDisabled}
              >
                {link.title}
              </Link>
            </Badge>
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
            <Badge
              color="primary"
              showOutline={false}
              content="soon"
              size="sm"
              isInvisible={!link.isDisabled}
              variant="shadow"
            >
              <Link
                className="w-full"
                color={link.path === currentPath ? "primary" : "foreground"}
                href={link.path}
                size="lg"
                isDisabled={link.isDisabled}
              >
                {link.title}
              </Link>
            </Badge>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
