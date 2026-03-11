"use client";

import Dropzone from "@/components/shared/Inputs/Drozpone/Dropzone";
import { COMPONENT_TYPES } from "@/constants";
import { ComponentType } from "@/interfaces/design-system-interface";
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
}
const ComponentTypeForm = ({
  componentType,
}: {
  componentType: ComponentType;
}) => {
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
    },
  });
  const onSubmit = async (data: ComponentTypeFormValues) => {
    console.log(data);
  };
  const router = useRouter();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <Dropzone register={register} name="componentImage" />
        {componentType?.componentImage && (
          <div className="flex items-center flex-col gap-2">
            <Image
              src={componentType.componentImage.url}
              alt={componentType.componentImage.url}
              width={100}
              height={100}
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
