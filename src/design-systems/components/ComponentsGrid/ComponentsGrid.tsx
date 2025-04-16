"use client";

import { IMAGES } from "@/constants";
import { Component } from "@/interfaces/design-system-interface";
import { Card, CardBody, CardFooter, Chip, Image } from "@heroui/react";
import Link from "next/link";
interface ComponentsProps {
  components: Component[];
}
const ComponentsGrid = ({ components }: ComponentsProps) => {
  const verifyRelatedNameForImage = (
    componentName: string,
    relatedNames: Array<string>
  ): string | undefined => {
    const getImage = (name: string) =>
      IMAGES[name.toUpperCase().replace(/\s+/g, "")];
    return getImage(componentName) || relatedNames.map(getImage).find(Boolean);
  };

  return (
    <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:grid-cols-3">
      {components.map((component, index) => (
        <Card
          href={component?.link_to_site || "#"}
          as={Link}
          key={index}
          isPressable
          shadow="none"
          className="border-1 border-solid border-gray-200"
          onPress={() =>
            console.log({ name: component.name.toUpperCase().replace(" ", "") })
          }
        >
          <CardBody className="overflow-visible p-3">
            <Image
              alt={`${component.name}_img`}
              className="w-full object-cover h-[140px]"
              src={`/assets/${verifyRelatedNameForImage(
                component.name,
                component.related_names
              )}.png`}
              width="100%"
              height="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <p>{component.name}</p>
            <Chip size="sm" color="success" variant="dot">
              {component?.type}
            </Chip>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ComponentsGrid;
