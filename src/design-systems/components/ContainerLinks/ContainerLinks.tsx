import { DesignSystem } from "@/interfaces/design-system-interface";
import {
  FolderOpenIcon,
  GlobeAmericasIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  designSystem: DesignSystem | null;
}
const ContainerLinks = ({ designSystem }: Props) => {
  const detailLinks = [
    {
      title: "Storybook",
      icon: <FolderOpenIcon className="size-5 text-gray-400" />,
      link: designSystem?.links?.storybook || null,
    },
    {
      title: "Figma",
      icon: <PaintBrushIcon className="size-5 text-gray-400" />,
      link: designSystem?.links?.figma || null,
    },
    {
      title: "Website",
      icon: <GlobeAmericasIcon className="size-5 text-gray-400" />,
      link: designSystem?.links?.web || null,
    },
  ];
  return (
    <div className="flex justify-between w-full border-1 border-solid border-gray-200 h-[12rem] rounded-2xl overflow-hidden">
      {detailLinks.map((link, index) => (
        <Link
          className="w-full flex flex-col justify-between"
          key={index}
          target="_blank"
          href={link.link || ""}
        >
          <div
            className={clsx(
              "h-full p-5 flex flex-col justify-between border-r border-gray-200 transition-colors",
              link.link ? "bg-white hover:bg-slate-50" : "bg-slate-50",
              index === detailLinks.length - 1 && "border-r-0"
            )}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="w-fit rounded-full border-1 border-solid border-gray-200 p-3 ">
                {link.icon}
              </div>
              <p>{link.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ContainerLinks;
