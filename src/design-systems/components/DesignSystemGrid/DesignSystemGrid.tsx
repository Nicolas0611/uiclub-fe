import { Card } from "@/components/shared/Card/Card";
import { DesignSystem } from "@/interfaces/design-system-interface";
import { Divider } from "@heroui/react";
import Link from "next/link";
import { CardBody } from "../CardBody/CardBody";

interface DSGripdProps {
  designSystems: DesignSystem[];
}
export const DesignSystemGrid = ({ designSystems }: DSGripdProps) => {
  return (
    <section className="flex flex-col gap-4 py-12">
      <h3 className="text-lg">Top Design Systems</h3>
      <Divider />
      <div className="grid grid-cols-3 gap-2 ">
        {designSystems.map((designSystem) => (
          <Link
            key={designSystem.id}
            href={`/design-systems/${designSystem.id}`}
          >
            <Card
              key={designSystem.id}
              title={designSystem.name}
              description={designSystem.description}
              url={designSystem.company_name}
              slot={
                <CardBody
                  quantity={designSystem.quantity_components}
                  popularity={designSystem.popularity}
                  is_updated={designSystem.is_updated}
                />
              }
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
