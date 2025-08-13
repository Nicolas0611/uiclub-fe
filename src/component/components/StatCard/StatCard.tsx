import clsx from "clsx";

interface StatCardProps {
  stat: string;
  description: string;
  isInverted?: boolean;
}

/**
 * StatCard
 *
 * - Only changes text color on hover when `isInverted` is true.
 * - Uses Tailwind's `group` for unified hover control.
 * - Keeps hover logic minimal and scoped to inverted state.
 */
const StatCard = ({ stat, description, isInverted = false }: StatCardProps) => {
  const baseClass =
    "group h-full gap-4 p-5 flex flex-col justify-between border border-gray-200 transition-colors rounded-2xl";
  const invertedClass = "bg-primary_light hover:bg-primary";
  const hoverTextClass = "group-hover:text-white transition-colors";

  return (
    <div className={clsx(baseClass, isInverted && invertedClass)}>
      <p
        className={clsx("text-primary text-5xl", {
          [hoverTextClass]: isInverted,
        })}
      >
        {stat}
      </p>
      <p
        className={clsx("text-neutral-500", {
          [hoverTextClass]: isInverted,
        })}
      >
        {description}
      </p>
    </div>
  );
};

export default StatCard;
