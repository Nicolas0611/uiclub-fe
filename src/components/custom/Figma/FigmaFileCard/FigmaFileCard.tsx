"use client";

import { DesignSystem } from "@/interfaces/design-system-interface";
import { EyeIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@heroui/react";
import { useState } from "react";

interface Props {
  figmaFile: DesignSystem & {
    _count: { components: number; componentTypes: number };
  };
}

const FigmaFileCard = ({ figmaFile }: Props) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Card
      shadow="none"
      className="p-4 w-full border-1 border-solid border-gray-200"
    >
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={figmaFile.company?.companyImage?.[0]?.url || ""}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {figmaFile.name}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {figmaFile.company?.name}
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
          startContent={<EyeIcon className="size-4" />}
        >
          {isFollowed ? "Viewed" : "View"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400 overflow-hidden">
        <div className="line-clamp-3">
          <p>{figmaFile.largeDescription}</p>
        </div>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <Chip color="success" size="sm" variant="dot">
            <p className="font-light text-default-400 text-small">
              {figmaFile._count.componentTypes} Specs Included
            </p>
          </Chip>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">
            {figmaFile._count.components}
          </p>
          <p className="text-default-400 text-small">Components</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FigmaFileCard;
