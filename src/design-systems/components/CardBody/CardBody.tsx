import { type Popularity } from "@/interfaces/design-system-interface";
import { Chip } from "@heroui/react";

interface Props {
  quantity: number;
  popularity: Popularity;
}
export const CardBody = ({ quantity, popularity }: Props) => {
  type StateTypes = "success" | "warning" | "danger";
  const badgeColor = {
    Medium: "warning",
    High: "success",
    Low: "danger",
  }[popularity] as StateTypes;

  return (
    <div className="flex flex-row justify-between w-full border-1 border-solid border-gray-200 p-4 rounded-lg">
      <div className="flex flex-col items-center gap-1">
        <p className="text-2xl">{quantity}</p>
        <p className="text-sm text-neutral-400">components</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <p className="text-2xl">{quantity}</p>
        <p className="text-sm text-neutral-400">components</p>
      </div>
      <div className="flex flex-col items-center justify-between">
        <Chip radius="sm" size="sm" variant="flat" color={badgeColor}>
          {popularity}
        </Chip>
        <p className="text-sm text-neutral-400">popularity</p>
      </div>
    </div>
  );
};
