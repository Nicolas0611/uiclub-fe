import Image from "next/image";
import React from "react";
import LinkButton from "../shared/LinkButton/LinkButton";
import { LinkItemProps } from "@/interfaces/link-item-interface";

const ProfileContainer = () => {
  interface ContentProps {
    title: string;
    description: string;
    links: LinkItemProps[];
  }
  const content: ContentProps = {
    title: "Welcome to UI Club",
    description:
      "Streamline your workflow by leveraging the combined expertise of leading Design Systems and UI libraries, all synthesized in one convenient place to help you research, define, and create UI components effortlessly.",
    links: [
      {
        title: "View Components",
        variant: "contained",
        path: "/design-systems",
      },
      {
        title: "View Design News",
        variant: "outlined",
        path: "/design-systems",
      },
    ],
  };

  return (
    <section className="flex flex-col items-center py-20 gap-7 bg-white border-2 border-neutral-100 w-full flex-grow rounded-xl ">
      <Image
        src="/logoProfile.svg"
        alt="profile"
        width={120}
        height={120}
        className="rounded-full"
      />
      <div className="flex flex-col items-center gap-1">
        <h1 className="capitalized text-2xl">{content.title}</h1>
        <p className="capitalized text-neutral-500 text-center w-2/4">
          {content.description}
        </p>
      </div>

      <div className="flex gap-3">
        {content.links.map((link, index) => (
          <LinkButton
            key={`link_${index}`}
            path={link.path}
            title={link.title}
            variant={link.variant}
          />
        ))}
      </div>
    </section>
  );
};

export default ProfileContainer;
