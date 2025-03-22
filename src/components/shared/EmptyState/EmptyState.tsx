import { MagnifyingGlassMinusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface Props {
  showLink: boolean;
  description: string;
  title: string;
}
const EmptyState = ({
  showLink = false,
  description = "",
  title = "",
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <MagnifyingGlassMinusIcon className="size-40 text-primary" />
      <p className="text-3xl">{title}</p>
      <p>{description}</p>
      {showLink && (
        <Link className="text-primary" href="/">
          Return Home
        </Link>
      )}
    </div>
  );
};

export default EmptyState;
