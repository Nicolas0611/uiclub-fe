"use client";

import { handleSearch } from "@/utils";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Button, Input, Link } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ComponentActions = () => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      handleSearch(searchTerm, router, pathName, searchParams);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  return (
    <div className="w-full flex justify-between">
      <Input
        classNames={{
          base: "max-w-full sm:max-w-[20rem] h-10 mr-auto pb-1",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper: "h-full font-normal text-default-500",
        }}
        value={searchTerm}
        placeholder="Type to search..."
        size="sm"
        startContent={<MagnifyingGlassIcon className="size-5" />}
        type="search"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <Button
        size="sm"
        color="primary"
        variant="solid"
        as={Link}
        href="/dashboard/components/new"
      >
        <PlusIcon className="size-5" />
        Add Component
      </Button>
    </div>
  );
};

export default ComponentActions;
