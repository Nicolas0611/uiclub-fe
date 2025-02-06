import {
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Card as HeroCard,
  Image,
  Link,
} from "@heroui/react";

export interface CardProps {
  isHoverable?: boolean;
  isPressable?: boolean;
  title: string;
  url: string;
  description: string;
  slot?: React.ReactNode;
  showFooter?: boolean;
}
export const Card = ({
  isHoverable = true,
  isPressable = true,
  title,
  url,
  description,
  slot,
  showFooter = false,
}: CardProps) => {
  return (
    <HeroCard
      isHoverable={isHoverable}
      isPressable={isPressable}
      shadow="none"
      className="max-w-[400px] border-1 border-solid border-gray-200"
    >
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md text-start">{title}</p>
          <p className="text-small text-left text-default-500">{url}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-sm text-neutral-500">{description} </p>
        {slot && <div className="pt-4">{slot}</div>}
      </CardBody>
      {showFooter && (
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/heroui-inc/heroui"
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      )}
    </HeroCard>
  );
};
