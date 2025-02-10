"use client";

import { Divider, Tab, Tabs } from "@heroui/react";
import { ReactNode, useState } from "react";

interface TabProps {
  title?: string;
  defaultKey: string;
  tabs: { key: string | null; title: ReactNode; children: ReactNode }[];
}

const SwitchTab = ({ tabs, defaultKey, title }: TabProps) => {
  const [selected, setSelected] = useState<string>(defaultKey);

  const handleSelect = (key: string) => {
    setSelected(key);
  };

  return (
    <div className="flex w-full flex-col">
      {title && <h3 className="text-lg pb-3">{title}</h3>}
      <Divider />
      <Tabs
        size="sm"
        aria-label="Options"
        color="primary"
        variant="bordered"
        selectedKey={selected}
        onSelectionChange={(key) => handleSelect(key as string)}
        className="flex justify-end pt-3"
      >
        {tabs.map((tab) => (
          <Tab key={tab.key} title={tab.title}>
            {tab.children}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default SwitchTab;
