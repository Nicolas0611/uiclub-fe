import {
  As,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Card as HeroCard,
  Image,
  Link,
} from "@heroui/react";

export interface CardProps {
  isHoverable?: boolean;
  title: string;
  url: string;
  description: string;
  slot?: React.ReactNode;
  showFooter?: boolean;
  img: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as: As<any>;
  isPressable: boolean;
  href: string;
  showTag?: boolean;
}
export const Card = ({
  isHoverable = true,
  title,
  url,
  description,
  slot,
  img,
  showFooter = false,
  as,
  href,
  showTag,
}: CardProps) => {
  return (
    <HeroCard
      isPressable
      isHoverable={isHoverable}
      shadow="none"
      className="border-1 border-solid border-gray-200"
      fullWidth
      as={as}
      href={href}
    >
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Image
            alt="heroui logo"
            height={40}
            radius="sm"
            src={img}
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md text-start">{title}</p>
            <p className="text-small text-left text-default-500">{url}</p>
          </div>
        </div>
        {showTag && (
          <Chip
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white",
            }}
            variant="shadow"
          >
            New
          </Chip>
        )}
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-sm text-neutral-500 line-clamp-3">{description} </p>
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
