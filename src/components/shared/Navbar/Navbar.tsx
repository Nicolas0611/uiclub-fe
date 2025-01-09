import Image from "next/image";
import LinkItem from "./LinkItem";
import {
  DocumentTextIcon,
  NewspaperIcon,
  DocumentPlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  {
    path: "/blog",
    title: "Blog",
    icon: <DocumentTextIcon className="size-6" />,
  },
  {
    path: "/news",
    title: "News",
    icon: <NewspaperIcon />,
  },
  {
    path: "/latest",
    title: "Latest",
    icon: <DocumentPlusIcon />,
  },
  {
    path: "/designsystems",
    title: "Design Systems",
    icon: <DocumentPlusIcon />,
  },
];

const Navbar = () => {
  return (
    <header className="h-20 justify-between items-center flex  px-20">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={130} height={130} />
      </Link>
      <ul className="flex gap-4">
        {links.map((link) => (
          <LinkItem
            key={link.path}
            path={link.path}
            icon={link.icon}
            title={link.title}
          />
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
