"use client";

import Dropzone from "@/components/shared/Inputs/Drozpone/Dropzone";
import { COMPONENT_TYPES } from "@/constants";
import {
  ComponentType,
  DesignSystemComponentType,
} from "@/interfaces/design-system-interface";
import {
  Button,
  Checkbox,
  Image,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export interface ComponentTypeFormValues {
  description: string;
  designSystemCount: number;
  id: string;
  implementationsCount: number; //todo: review if this is needed or if we use it
  link: string;
  name: string;
  state: boolean;
  type: string;
  usageCount: number;
  componentImage: FileList;
  designSystemId: string;
  componentTypeId: string;
}

interface ComponentTypeFormProps {
  componentType: ComponentType;
  componentDesign: DesignSystemComponentType;
  componentsOptions: { label: string; value: string }[]; //Todo: Review to make a global interface for options
  designSystemsOptions: { label: string; value: string }[];
}

//TODO: REVIEW THIS REFACTOR https://claude.ai/chat/d87c5201-71ec-4e46-8662-87f7e7966aa9
const ComponentTypeForm = ({
  componentType,
  componentDesign,
  componentsOptions,
  designSystemsOptions,
}: ComponentTypeFormProps) => {
  const { register, handleSubmit } = useForm<ComponentTypeFormValues>({
    defaultValues: {
      name: componentType.name,
      state: componentType.state,
      description: componentType.description,
      designSystemCount: componentType.designSystemCount,
      link: componentType.link,
      type: componentType.type,
      usageCount: componentType.usageCount,
      componentImage: undefined,

      designSystemId: componentDesign?.designSystemId,
      componentTypeId: componentDesign?.componentTypeId,
    },
  });
  const onSubmit = async (data: ComponentTypeFormValues) => {
    console.log(data);
  };
  const router = useRouter();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Component Type Form*/}

      <div className="flex flex-col gap-4 pb-4">
        <Input
          label="Nombre del componente"
          className="w-full"
          {...register("name")}
        />
        <Textarea
          label="Descripción del componente"
          {...register("description")}
        />
        <Input
          label="Cantidad de diseños de sistema"
          {...register("designSystemCount")}
        />
        <Input label="Cantidad de usos" {...register("usageCount")} />
        <Input label="Slug del componente" {...register("link")} />
        <Select label="Tipo de componente" {...register("type")}>
          {COMPONENT_TYPES.map((type) => (
            <SelectItem key={type.value}>{type.label}</SelectItem>
          ))}
        </Select>

        <Checkbox
          className="w-full"
          defaultChecked={true}
          {...register("state")}
        >
          Estado
        </Checkbox>
        <div className="flex flex-row gap-2">
          <Dropzone register={register} name="componentImage" />
          {componentType?.componentImage && (
            <div className="flex items-center flex-col gap-2">
              <Image
                src={componentType.componentImage.url}
                alt={componentType.componentImage.url}
                width={600}
              />
              <Button
                size="sm"
                type="button"
                variant="flat"
                color="danger"
                onPress={() => {
                  console.log("eliminar imagen");
                }}
              >
                Eliminar
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Related Components and Design Systems Form*/}

      <div className="flex flex-col gap-4 border-t border-gray-200 py-4">
        <Select label="Componente" {...register("componentTypeId")}>
          {componentsOptions.map((component) => (
            <SelectItem key={component.value}>{component.label}</SelectItem>
          ))}
        </Select>
        <Select label="Design System" {...register("designSystemId")}>
          {designSystemsOptions.map((designSystem) => (
            <SelectItem key={designSystem.value}>
              {designSystem.label}
            </SelectItem>
          ))}
        </Select>
      </div>

      <div className="flex justify-end gap-4 border-t border-gray-200 pt-4">
        <Button type="submit" variant="light" onPress={() => router.back()}>
          Cancelar
        </Button>
        <Button type="submit" color="primary" /*  isLoading={isLoading} */>
          Guardar
        </Button>
      </div>
    </form>
  );
};

export default ComponentTypeForm;
