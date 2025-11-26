"use client";
import IFrame from "@/components/custom/component-page/IFrame/IFrame";
import { FigmaLinks } from "@/interfaces/design-system-interface";
import { Tabs as HeroTabs, Tab } from "@heroui/react";

interface Props<T> {
  items: T[];
  placement?: "top" | "bottom" | "start" | "end" | undefined;
}
const Tabs = <T extends FigmaLinks>({ items, placement }: Props<T>) => {
  return (
    <HeroTabs aria-label="Dynamic tabs" items={items} placement={placement}>
      {(item) => (
        <Tab className="w-full" key={item.id} title={item.company.name}>
          <IFrame link={item.url} />
        </Tab>
      )}
    </HeroTabs>
  );
};

export default Tabs;
