import { ComponentType } from "@/interfaces/design-system-interface";
import { replaceBackendWithLocalhost } from "@/utils";
import clsx from "clsx";
import Image from "next/image";

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
  const visibleBrands = brands.slice(0, 2);
  const remainingCount = brands.length - visibleBrands.length;

  console.log(JSON.stringify(brands));
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
        {brands.length > 0 && (
          <div className="flex">
            {visibleBrands.map((brand, index) => (
              <div
                key={`brand_${index}`}
                className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 -ml-1"
              >
                <Image
                  src={replaceBackendWithLocalhost(brand.thumbnail_image)}
                  alt={brand.name}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
            ))}
            {remainingCount > 0 && (
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600 -ml-1">
                +{remainingCount}
              </div>
            )}
          </div>
        )}
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
