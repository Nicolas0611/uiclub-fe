"use client";
import { Component } from "@/interfaces/design-system-interface";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";

interface ComponentsProps {
  components: Component[];
}
const ComponentsGrid = ({ components }: ComponentsProps) => {
  return (
    <div className="grid grid-cols-4 gap-7 py-4">
      {components.map((component, index) => (
        <Card
          key={index}
          isPressable
          shadow="none"
          className="border-1 border-solid border-gray-200"
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-3">
            <Image
              alt={`${component.name}_img`}
              className="w-full object-cover h-[140px]"
              src="https://miro.medium.com/v2/resize:fit:1400/1*M3DW73fGv1nV3CuabO8yiQ.png"
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <p>{component.name}</p>
            <p className="text-default-500">{component.type}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ComponentsGrid;
