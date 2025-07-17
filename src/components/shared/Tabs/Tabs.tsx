"use client";
import IFrame from "@/component/components/IFrame/IFrame";
import { FigmaLinks } from "@/interfaces/design-system-interface";
import { Tabs as HeroTabs, Tab } from "@heroui/react";

interface Props<T> {
  items: T[];
}
const Tabs = <T extends FigmaLinks>({ items }: Props<T>) => {
  return (
    <HeroTabs aria-label="Dynamic tabs" items={items}>
      {(item) => (
        <Tab key={item.id} title={item.company_name}>
          <IFrame link={item.url} />
        </Tab>
      )}
    </HeroTabs>
  );
};

export default Tabs;
