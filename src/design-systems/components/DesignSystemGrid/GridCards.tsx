import { Card } from "@/components/shared/Card/Card";
import EmptyState from "@/components/shared/EmptyState/EmptyState";
import { DesignSystem } from "@/interfaces/design-system-interface";
import Link from "next/link";
import { CardBody } from "../CardBody/CardBody";

interface Props {
  designSystems: DesignSystem[];
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
          href={`/design-systems/${designSystem.slug}`}
          img={designSystem.companyImage?.url}
          title={designSystem.name}
          description={designSystem.shortDescription}
          url={designSystem.company.name}
          showTag={designSystem.isNew}
          slot={
            <CardBody
              quantity={designSystem._count.components || 0}
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
