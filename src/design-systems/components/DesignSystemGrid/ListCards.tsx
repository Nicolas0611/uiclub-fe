import { DesignSystem } from "@/interfaces/design-system-interface";
import { Card, CardBody, Chip, Image } from "@heroui/react";
import Link from "next/link";

interface Props {
  designSystems: DesignSystem[];
}

const ListCards = ({ designSystems }: Props) => {
  type StateTypes = "success" | "warning" | "danger";

  return (
    <div className="flex flex-col gap-3">
      {designSystems.map((designSystem) => (
        <Link
          key={designSystem.id}
          href={`/design-systems/${designSystem.slug}`}
        >
          <Card
            key={designSystem.id}
            isPressable
            shadow="none"
            className="w-full border-1 border-solid border-gray-200"
          >
            <CardBody className="flex h-full flex-row items-start gap-3 p-4">
              <div className="flex-shrink-0">
                <Image
                  alt="company_logo"
                  height={40}
                  radius="sm"
                  src={designSystem.thumbnail_image || ""}
                  width={40}
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center flex-row gap-2">
                  <p className="text-medium">{designSystem.name}</p>
                  <Chip
                    radius="sm"
                    size="sm"
                    variant="flat"
                    color={
                      {
                        MEDIUM: "warning",
                        HIGH: "success",
                        LOW: "danger",
                      }[designSystem.popularity] as StateTypes
                    }
                  >
                    {designSystem.popularity}
                  </Chip>
                </div>

                <p className="text-small text-default-400">
                  {designSystem.shortDescription}
                </p>
              </div>
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ListCards;
