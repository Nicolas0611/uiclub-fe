import { Card } from "@/components/shared/Card/Card";
import EmptyState from "@/components/shared/EmptyState/EmptyState";
import { DesignSystem } from "@/interfaces/design-system-interface";
import { CardHeader, Chip, Image } from "@heroui/react";
import Link from "next/link";
import { CardBody } from "../CardBody/CardBody";

interface Props {
  designSystems: DesignSystem[];
  isDashboard?: boolean;
}

const GridCards = ({ designSystems }: Props) => {
  if (designSystems.length === 0)
    return (
      <EmptyState
        showLink={false}
        title="No results found"
        description="Try with a different word"
      />
    );
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {designSystems.map((designSystem) => (
        <Card
          key={designSystem.id}
          as={Link}
          header={
            <CardHeader className="justify-between">
              <div className="flex gap-3">
                <Image
                  alt="heroui logo"
                  height={40}
                  radius="sm"
                  src={designSystem.companyImage?.url}
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md text-start">{designSystem.name}</p>
                  <p className="text-small text-left text-default-500">
                    {designSystem.company?.name}
                  </p>
                </div>
              </div>
              {designSystem.isNew && (
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
          }
          href={`/design-systems/${designSystem.slug}`}
          description={designSystem.shortDescription}
          slot={
            <CardBody
              quantity={designSystem._count?.components || 0}
              popularity={designSystem.popularity}
              isUpdated={designSystem.isUpdated}
            />
          }
          isPressable
        />
      ))}
    </div>
  );
};

export default GridCards;
