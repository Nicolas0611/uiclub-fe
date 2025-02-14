import { Card } from "@/components/shared/Card/Card";
import { DesignSystem } from "@/interfaces/design-system-interface";
import { replaceBackendWithLocalhost } from "@/utils";
import Link from "next/link";
import { CardBody } from "../CardBody/CardBody";

interface Props {
  designSystems: DesignSystem[];
}

const GridCards = ({ designSystems }: Props) => {
  //!TODO INSTEAD PASS AN SLUG INSTEAD OF THE DESIGN SYSTEM ID
  return (
    <div className="grid grid-cols-3 gap-2 ">
      {designSystems.map((designSystem) => (
        <Link
          key={designSystem.id}
          href={`/design-systems/${designSystem.slug}`}
        >
          <Card
            img={replaceBackendWithLocalhost(designSystem.thumbnail_image)}
            key={designSystem.id}
            title={designSystem.name}
            description={designSystem.short_description}
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
  );
};

export default GridCards;
