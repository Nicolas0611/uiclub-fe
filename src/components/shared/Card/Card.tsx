import { As, CardBody, Divider, Card as HeroCard } from "@heroui/react";

export interface CardProps {
  isHoverable?: boolean;
  description: string;
  slot?: React.ReactNode;
  showFooter?: boolean;
  header?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  as: As<any>;
  isPressable: boolean;
  href: string;
}
export const Card = ({
  isHoverable = true,
  header,
  description,
  slot,
  as,
  href,
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
      {header && header}
      <Divider />
      <CardBody>
        <p className="text-sm text-neutral-500 line-clamp-3">{description} </p>
        {slot && <div className="pt-4">{slot}</div>}
      </CardBody>
    </HeroCard>
  );
};
