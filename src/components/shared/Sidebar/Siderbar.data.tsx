import {
  BuildingStorefrontIcon,
  HomeIcon,
  LinkIcon,
  PencilIcon,
  PuzzlePieceIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const menuItems = [
  {
    key: "home",
    label: "Home",
    icon: <HomeIcon className="size-5" />,
    role: "all",
  },
  {
    key: "design-systems",
    label: "Design Systems",
    icon: <PencilIcon className="size-5" />,
    role: "all",
  },
  {
    key: "components",
    label: "Components",
    icon: <PuzzlePieceIcon className="size-5" />,
    role: "all",
  },
  {
    key: "links",
    label: "Links",
    icon: <LinkIcon className="size-5" />,
    role: "all",
  },
  {
    key: "users",
    label: "Users",
    icon: <UsersIcon className="size-5" />,
    role: "admin",
  },
  {
    key: "companies",
    label: "Companies",
    icon: <BuildingStorefrontIcon className="size-5" />,
    role: "all",
  },
];
