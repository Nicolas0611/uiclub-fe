"use client";

import { fetchComponentList } from "@/actions/component/component-action";
import { fetchDesignSystems } from "@/actions/design-system/design-actions";
import {
  ComponentType,
  DesignSystem,
} from "@/interfaces/design-system-interface";
import { optionsMapper } from "@/utils";
import { LinkIcon, PlusIcon } from "@heroicons/react/24/outline";
import { Button, Link, useDisclosure } from "@heroui/react";
import { useEffect, useState } from "react";
import RelationModal from "../RelationModal/RelationModal";

export type FormOptions = {
  componentTypes: { label: string; value: string }[];
  designSystems: { label: string; value: string }[];
};

const ActionsBar = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [formOptions, setFormOptions] = useState<FormOptions>({
    componentTypes: [],
    designSystems: [],
  });

  const getComponentTypes = async () => {
    const [components, designSystems] = await Promise.all([
      fetchComponentList({}),
      fetchDesignSystems(),
    ]);
    const componentOptions = optionsMapper<ComponentType>(
      components.components,
    );
    const designSystemOptions = optionsMapper<DesignSystem>(designSystems);
    setFormOptions({
      componentTypes: componentOptions,
      designSystems: designSystemOptions,
    });
  };

  useEffect(() => {
    getComponentTypes();
  }, []);

  return (
    <>
      <RelationModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onClose}
        formOptions={formOptions}
      />
      <div className="w-full flex items-center justify-end gap-2">
        <Button size="sm" color="primary" variant="bordered" onPress={onOpen}>
          <LinkIcon className="size-5" />
          Relationship
        </Button>
        <Button
          size="sm"
          color="primary"
          variant="solid"
          as={Link}
          href="/dashboard/component-type/new"
        >
          <PlusIcon className="size-5" />
          Add Component Type
        </Button>
      </div>
    </>
  );
};

export default ActionsBar;
