"use client";

import { Component } from "@/interfaces/design-system-interface";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
interface ComponentsProps {
  components: Component[];
}
const ComponentsGrid = ({ components }: ComponentsProps) => {
  return (
    <div className="grid grid-cols-4 gap-7 py-6">
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
              src="/assets/Button.png"
              width="100%"
              height="100%"
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
