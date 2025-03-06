"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Divider, Input, Tab, Tabs } from "@heroui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useState } from "react";

interface TabProps {
  title?: string;
  defaultKey: string;
  tabs: { key: string | null; title: ReactNode; children: ReactNode }[];
}

const SwitchTab = ({ tabs, defaultKey, title }: TabProps) => {
  const [selected, setSelected] = useState<string>(defaultKey);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const search = searchParams.get("search") ?? "";

  const handleSelect = (key: string) => {
    setSelected(key);
  };
  //! add debounced handleSearch
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="flex w-full flex-col">
      {title && <h3 className="text-lg pb-3">{title}</h3>}
      <Divider />

      <div className="flex flex-wrap w-full pt-5">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[20rem] h-10 mr-auto pb-1",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500",
          }}
          value={search}
          placeholder="Type to search..."
          size="sm"
          startContent={<MagnifyingGlassIcon className="size-5" />}
          type="search"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <Tabs
          size="sm"
          aria-label="Options"
          color="primary"
          variant="bordered"
          selectedKey={selected}
          onSelectionChange={(key) => handleSelect(key as string)}
          className="ml-auto pb-1"
        >
          {tabs.map((tab) => (
            <Tab className="w-full" key={tab.key} title={tab.title}>
              {tab.children}
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default SwitchTab;
