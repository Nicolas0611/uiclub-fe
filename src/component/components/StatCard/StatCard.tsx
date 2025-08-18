import { ComponentType } from "@/interfaces/design-system-interface";
import clsx from "clsx";
import BrandsMapper from "../BrandsMapper/BrandsMapper";

interface StatCardProps {
  stat: string;
  description: string;
  isInverted?: boolean;
  brands?: ComponentType["related_design_systems"];
}

/**
 * StatCard
 *
 * - Only changes text color on hover when `isInverted` is true.
 * - Uses Tailwind's `group` for unified hover control.
 * - Displays first 2 brands and, if applicable, a "+X" indicator for remaining.
 */
export default function StatCard({
  stat,
  description,
  isInverted = false,
  brands = [],
}: StatCardProps) {
  const baseClass =
    "group h-full gap-4 p-5 flex flex-col justify-between border border-gray-200 transition-colors rounded-2xl";
  const invertedClass = "bg-primary_light hover:bg-primary";
  const hoverTextClass = "group-hover:text-white transition-colors";

  // Brand display logic

  return (
    <div className={clsx(baseClass, isInverted && invertedClass)}>
      <div className="flex flex-row gap-2 justify-between align-center w-full">
        <p
          className={clsx("text-primary text-5xl", {
            [hoverTextClass]: isInverted,
          })}
        >
          {stat}
        </p>
        {brands.length > 0 && <BrandsMapper brands={brands} />}
      </div>

      <p
        className={clsx("text-neutral-500", {
          [hoverTextClass]: isInverted,
        })}
      >
        {description}
      </p>
    </div>
  );
}
