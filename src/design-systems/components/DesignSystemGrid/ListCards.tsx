import { DesignSystem } from "@/interfaces/design-system-interface";
import { replaceBackendWithLocalhost } from "@/utils";
import { Card, CardBody, Image } from "@heroui/react";
import Link from "next/link";

interface Props {
  designSystems: DesignSystem[];
}

const ListCards = ({ designSystems }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      {designSystems.map((designSystem) => (
        <Link key={designSystem.id} href={`/design-systems/${designSystem.id}`}>
          <Card
            key={designSystem.id}
            isPressable
            shadow="none"
            className="w-full border-1 border-solid border-gray-200"
          >
            <CardBody className="flex h-full flex-row items-start gap-3 p-4">
              <Image
                alt="company_logo"
                height={40}
                radius="sm"
                src={replaceBackendWithLocalhost(designSystem.thumbnail_image)}
                width={40}
              />

              <div className="flex flex-col">
                <p className="text-medium">{designSystem.name}</p>
                <p className="text-small text-default-400">
                  {designSystem.short_description}
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
