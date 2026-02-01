"use client";

import { logout } from "@/actions/auth/logout";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Divider,
  Link,
  Listbox,
  ListboxItem,
  ScrollShadow,
  Tooltip,
} from "@heroui/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import User, { UserProps } from "../User/User";
import { menuItems } from "./Siderbar.data";

// Basic Sidebar Component
interface SidebarProps {
  user: UserProps;
  role: string /* "admin" | "user" */;
}

export const Sidebar = ({ user, role }: SidebarProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const selectedKeyPath = pathname.split("/").pop();

  const menuItemsRoles = useMemo(() => {
    if (role === "admin") {
      return menuItems.filter(
        (item) => item.role === "all" || item.role === "admin",
      );
    }
    return menuItems.filter((item) => item.role === "all");
  }, [role]);

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };
  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`
          hidden lg:flex
          relative h-screen bg-white border-r border-gray-200 flex-col
          transition-all duration-300 ease-in-out
          ${isOpen ? "w-56" : "w-16"}
        `}
      >
        <div
          className={`p-3 flex items-center justify-between ${isOpen ? "" : "flex-col gap-2"}`}
        >
          {isOpen ? (
            <>
              <div className="flex flex-col gap-2">
                <Image src="/logo.svg" alt="logo" width={90} height={90} />
                <p className="text-xs text-gray-500 truncate">
                  Admin Dashboard
                </p>
              </div>
              <Button
                isIconOnly
                size="sm"
                variant="light"
                onPress={() => setIsOpen(false)}
              >
                <XMarkIcon className="size-5" />
              </Button>
            </>
          ) : (
            <Button
              isIconOnly
              size="sm"
              variant="light"
              onPress={() => setIsOpen(true)}
            >
              <Bars3Icon className="size-5" />
            </Button>
          )}
        </div>

        {isOpen && (
          <>
            <Divider />

            <ScrollShadow className="flex-1 p-2">
              <Listbox
                aria-label="Dynamic Actions"
                items={menuItemsRoles}
                selectedKeys={[selectedKeyPath || "companies"]}
                selectionMode="single"
                color="primary"
                variant="solid"
              >
                {(item) => (
                  <ListboxItem
                    key={item.key}
                    startContent={item.icon}
                    className={`mb-2 cursor-pointer ${selectedKeyPath === item.key ? "bg-slate-100" : ""}`}
                    href={`/dashboard/${item.key}`}
                  >
                    {item.label}
                  </ListboxItem>
                )}
              </Listbox>
            </ScrollShadow>

            <Divider />

            <User name={user.name} email={user.email} onLogout={handleLogout} />
          </>
        )}

        {/* Collapsed state - Desktop only */}
        {!isOpen && (
          <div className="flex flex-1 flex-col items-center py-4 gap-3">
            {menuItemsRoles.map((item) => (
              <Tooltip key={item.key} content={item.label} placement="right">
                <Button
                  isIconOnly
                  size="sm"
                  variant={selectedKeyPath === item.key ? "solid" : "light"}
                  color={selectedKeyPath === item.key ? "primary" : "default"}
                  as={Link}
                  href={`/dashboard/${item.key}`}
                >
                  {item.icon}
                </Button>
              </Tooltip>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 safe-area-pb">
        <div className="flex items-center justify-around px-2 py-2">
          {menuItemsRoles.slice(0, 5).map((item) => (
            <Button
              key={item.key}
              as={Link}
              href={`/dashboard/${item.key}`}
              variant="light"
              className={`flex-1 flex flex-col items-center gap-1 h-auto py-2 px-1 ${
                selectedKeyPath === item.key ? "text-primary" : "text-gray-600"
              }`}
            >
              <div
                className={selectedKeyPath === item.key ? "text-primary" : ""}
              >
                {item.icon}
              </div>
              <span className="text-[10px] font-medium truncate w-full text-center">
                {item.label}
              </span>
            </Button>
          ))}

          {/* More/Menu button if you have more than 5 items */}
          {menuItemsRoles.length > 5 && (
            <Button
              variant="light"
              className="flex-1 flex flex-col items-center gap-1 h-auto py-2 px-1 text-gray-600"
              onPress={() => {
                /* Open a modal or sheet with remaining items */
              }}
            >
              <Bars3Icon className="size-5" />
              <span className="text-[10px] font-medium">More</span>
            </Button>
          )}
        </div>
      </div>

      {/* Add padding to main content on mobile to prevent footer overlap */}
      <style jsx global>{`
        @media (max-width: 1024px) {
          main {
            padding-bottom: 70px;
          }
        }

        /* Safe area for devices with notches */
        .safe-area-pb {
          padding-bottom: env(safe-area-inset-bottom);
        }
      `}</style>
    </>
  );
};
