import Image from "next/image";
import Link from "next/link";
import LinkItem from "./LinkItem";

const links = [
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/news",
    title: "News",
  },
  {
    path: "/latest",
    title: "Latest",
  },
  {
    path: "/design-systems",
    title: "Design Systems",
  },
];

const Navbar = () => {
  return (
    <header className="container mx-auto px-4 h-20 justify-between items-center flex z-40">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={130} height={130} />
      </Link>
      <ul className="flex gap-4">
        {links.map((link) => (
          <LinkItem key={link.path} path={link.path} title={link.title} />
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
