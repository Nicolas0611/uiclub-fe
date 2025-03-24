import { DesignSystem } from "@/interfaces/design-system-interface";
import {
  FolderOpenIcon,
  GlobeAmericasIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import { Chip } from "@heroui/react";
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
    <div className="flex flex-col justify-between w-full border-1 border-solid border-gray-200 rounded-2xl overflow-hidden md:flex-row md:h-[12rem]">
      {detailLinks.map((link, index) => (
        <Link
          className={`w-full flex flex-col justify-between ${
            link.link ? "pointer-events-auto" : "pointer-events-none"
          }`}
          key={`link_${index}`}
          target="_blank"
          href={link.link || ""}
        >
          <div
            className={clsx(
              "h-full p-5 flex flex-col justify-between border-b border-gray-200 transition-colors md:border-r md:border-b-0",
              link.link ? "bg-white hover:bg-slate-50" : "bg-slate-50",
              index === detailLinks.length - 1 && "border-b-0 md:border-r-0"
            )}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="w-fit rounded-full border-1 border-solid border-gray-200 p-3 ">
                  {link.icon}
                </div>
                {!link.link && (
                  <Chip radius="sm" size="sm" variant="flat" color="default">
                    Not available
                  </Chip>
                )}
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
