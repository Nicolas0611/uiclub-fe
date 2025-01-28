import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import Image from "next/image";
import Button, { ButtonProps } from "../shared/Button/Button";

const ProfileContainer = () => {
  interface ContentProps {
    title: string;
    description: string;
    links: ButtonProps[];
  }
  const content: ContentProps = {
    title: "Welcome to UI Club",
    description:
      "Streamline your workflow by leveraging the combined expertise of leading Design Systems and UI libraries, all synthesized in one convenient place to help you research, define, and create UI components effortlessly.",
    links: [
      {
        title: "View Components",
        variant: "solid",
        path: "/design-systems",
      },
      {
        title: "View Design News",
        variant: "bordered",
        path: "/design-systems",
      },
    ],
  };

  return (
    <Card shadow="sm" className="w-full flex-grow p-5 gap-1">
      <CardHeader className="justify-center">
        <Image
          src="/logoProfile.svg"
          alt="profile"
          width={120}
          height={120}
          className="rounded-full"
        />
      </CardHeader>
      <CardBody>
        <div className="flex flex-col gap-2 align-center justify-center">
          <p className="text-2xl text-center">{content.title}</p>
          <p className="text-small text-default-500  text-center px-10">
            {content.description}
          </p>
        </div>
      </CardBody>
      <CardFooter className="justify-center">
        <div className="flex gap-3">
          {content.links.map((link, index) => (
            <Button
              key={`link_${index}`}
              path={link.path}
              title={link.title}
              variant={link.variant}
            />
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProfileContainer;
