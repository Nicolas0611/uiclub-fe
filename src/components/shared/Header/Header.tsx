"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentPath = usePathname();

  return (
    <header className="flex  w-fullitems-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center gap-2">
        <h4 className="text-lg text-gray-500">Dashboard</h4>
        <ChevronRightIcon className="size-5 text-gray-500" />
        <p className="text-lg text-primary font-medium">
          {currentPath.split("/").pop()?.toWellFormed()}
        </p>
      </div>
    </header>
  );
};

export default Header;
