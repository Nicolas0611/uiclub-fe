"use client";

import { IMAGES } from "@/constants";
import { ComponentType } from "@/interfaces/design-system-interface";
import { Card, CardBody, CardFooter, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
interface ComponentsProps {
  components: ComponentType[];
}
const ComponentsGrid = ({ components }: ComponentsProps) => {
  const verifyRelatedNameForImage = (
    componentName: string,
    relatedNames: Array<string>
  ): string | undefined => {
    const getImage = (name: string) =>
      IMAGES[name.toUpperCase().replace(/\s+/g, "")];
    return getImage(componentName) || relatedNames?.map(getImage).find(Boolean);
  };

  return (
    <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:grid-cols-3">
      {components.map((component, index) => (
        <Card
          isHoverable={true}
          href={component?.link_to_site || "#"}
          as={Link}
          key={`component_${index}`}
          isPressable
          shadow="none"
          className="border-1 border-solid border-gray-200"
        >
          <CardBody className="overflow-visible p-3">
            <Image
              alt={`${component.name}_img`}
              className="w-full object-cover h-[140px]"
              src={`/assets/${verifyRelatedNameForImage(
                component.name,
                component.related_names
              )}.png`}
              width={1000}
              height={1000}
              quality={100}
              style={{ height: "100%" }}
              loading="lazy"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <p>{component.name}</p>
            <Chip size="sm" color="success" variant="dot">
              {component?.type || component?.category}
            </Chip>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ComponentsGrid;
