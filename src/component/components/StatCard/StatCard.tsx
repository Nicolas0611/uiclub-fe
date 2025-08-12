import clsx from "clsx";

interface StatCardProps {
  stat: string;
  description: string;
}
const StatCard = ({ stat, description }: StatCardProps) => {
  return (
    <div
      className={clsx(
        "h-full gap-4 p-5 flex flex-col justify-between border border-gray-200 transition-colors rounded-2xl"
      )}
    >
      <p className="text-primary text-5xl ">{stat}</p>
      <p className="text-neutral-500">{description} </p>
    </div>
  );
};

export default StatCard;
