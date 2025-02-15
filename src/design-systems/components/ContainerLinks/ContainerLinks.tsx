import Link from "next/link";

interface Props {
  links: { title: string; icon: React.ReactNode; link: string }[];
}
const ContainerLinks = ({ links }: Props) => {
  return (
    <div className="flex justify-between w-full border-1 border-solid border-gray-200 h-[12rem] rounded-2xl p-5 gap-8">
      {links.map((link, index) => (
        <Link
          className="w-full flex flex-col justify-between"
          key={index}
          href={link.link}
        >
          <div
            className={`h-full flex flex-col justify-between border-r border-gray-200 border-solid ${
              index === links.length - 1 ? "border-r-0" : ""
            }`}
          >
            <div className="w-fit rounded-full border-1 border-solid border-gray-200 p-3 ">
              {link.icon}
            </div>
            <p>{link.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ContainerLinks;
