import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <ExclamationCircleIcon className="size-40 text-primary" />
      <h1 className="text-6xl">Not Found</h1>
      <p>Could not find requested resource</p>
      <Link className="text-primary" href="/">
        Return Home
      </Link>
    </div>
  );
}
