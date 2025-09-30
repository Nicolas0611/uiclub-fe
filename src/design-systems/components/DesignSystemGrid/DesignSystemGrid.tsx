import { SwitchTabs } from "@/components/shared";
import { DesignSystem } from "@/interfaces/design-system-interface";
import { QueueListIcon, TableCellsIcon } from "@heroicons/react/24/outline";
import GridCards from "./GridCards";
import ListCards from "./ListCards";

interface IGrid {
  designSystems: DesignSystem[];
}
export const DesignSystemGrid = ({ designSystems }: IGrid) => {
  const Tabs = [
    {
      key: "grid",
      title: <TableCellsIcon className="size-5" />,
      children: <GridCards designSystems={designSystems} />,
    },
    {
      key: "list",
      title: <QueueListIcon className="size-5" />,
      children: <ListCards designSystems={designSystems} />,
    },
  ];
  return (
    <section className="flex flex-col gap-4 py-12">
      <div className="flex items-center justify-between w-full">
        <SwitchTabs title="Top Design Systems" defaultKey="grid" tabs={Tabs} />
      </div>
    </section>
  );
};
