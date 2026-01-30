"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Divider,
  Listbox,
  ListboxItem,
  ScrollShadow,
} from "@heroui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import User, { UserProps } from "../User/User";
import { menuItems } from "./Siderbar.data";

// Basic Sidebar Component
interface SidebarProps {
  user: UserProps;
}

export const Sidebar = ({ user }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const selectedKeyPath = pathname.split("/").pop();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-56 h-screen bg-white border-r border-gray-200 flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <div className="p-4 flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <Image src="/logo.svg" alt="logo" width={100} height={100} />
            <p className="text-xs text-gray-500 truncate">Admin Dashboard</p>
          </div>
          <Button
            isIconOnly
            size="sm"
            variant="light"
            className="lg:hidden"
            onPress={() => setIsOpen(false)}
          >
            <XMarkIcon className="size-5" />
          </Button>
        </div>

        <Divider />

        <ScrollShadow className="flex-1 p-2">
          <Listbox
            aria-label="Dynamic Actions"
            items={menuItems}
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

        <User name={user.name} email={user.email} />
      </div>
    </>
  );
};
