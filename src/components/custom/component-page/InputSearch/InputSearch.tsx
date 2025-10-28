"use client";
import { handleSearch } from "@/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const InputSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      handleSearch(searchTerm, router, pathname, searchParams);
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);
  return (
    <Input
      classNames={{
        base: "max-w-full sm:max-w-[20rem] h-10 mr-auto pb-1",
        mainWrapper: "h-full",
        input: "text-small",
        inputWrapper: "h-full font-normal text-default-500",
      }}
      value={searchTerm}
      placeholder="Type to search a component..."
      size="sm"
      startContent={<MagnifyingGlassIcon className="size-5" />}
      type="search"
      onChange={(e) => {
        setSearchTerm(e.target.value);
      }}
    />
  );
};

export default InputSearch;
