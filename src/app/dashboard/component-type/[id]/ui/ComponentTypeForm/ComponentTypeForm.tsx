"use client";

import { createUpdateComponentType } from "@/actions/component-type/create-update-component-type";
import { deleteComponentImage } from "@/actions/component/delete-component-image";
import Dropzone from "@/components/shared/Inputs/Dropzone/Dropzone";
import { COMPONENT_TYPES } from "@/constants";
import {
  ComponentImage,
  ComponentType,
} from "@/interfaces/design-system-interface";
import {
  Button,
  Image,
  Input,
  Select,
  SelectItem,
  Switch,
  Textarea,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

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
  componentImageId: string;
}

interface ComponentTypeFormProps {
  componentType: ComponentType;
  componentImages: ComponentImage[];
}

//TODO: REVIEW THIS REFACTOR https://claude.ai/chat/d87c5201-71ec-4e46-8662-87f7e7966aa9
const ComponentTypeForm = ({
  componentType,
  componentImages,
}: ComponentTypeFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { register, handleSubmit } = useForm<ComponentTypeFormValues>({
    defaultValues: {
      name: componentType?.name,
      state: componentType?.state,
      description: componentType?.description,
      designSystemCount: componentType?.designSystemCount,
      link: componentType?.link,
      type: componentType?.type,
      usageCount: componentType?.usageCount,
      componentImage: undefined,

      componentImageId: componentType?.componentImageId,
    },
  });

  const componentImagesOptions = useMemo(() => {
    const emptyOption = {
      image: "  ",
      label: "Selecciona una imagen",
      value: null,
    };
    const options = componentImages.map((componentImage) => ({
      image: componentImage.url,
      label: componentImage.name,
      value: componentImage.id,
    }));

    return [emptyOption, ...options];
  }, [componentImages]);

  const onSubmit = async (data: ComponentTypeFormValues) => {
    setIsLoading(true);
    const formData = new FormData();

    if (data.componentImage) {
      formData.append("componentImage", data.componentImage[0]);
    }
    data.id = componentType?.id ?? undefined;

    const result = await createUpdateComponentType(data, formData);
    if (result?.ok) {
      toast.success(result.message);
      router.push("/dashboard/component-type");
    } else {
      toast.error(result.message);
    }
    setIsLoading(false);
  };

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

        <Select label="Imagen del componente" {...register("componentImageId")}>
          {componentImagesOptions.map((componentImage) => (
            <SelectItem
              startContent={
                <Image
                  src={componentImage.image}
                  alt={componentImage.label}
                  width={30}
                  height={30}
                />
              }
              key={componentImage.value}
            >
              {componentImage.label}
            </SelectItem>
          ))}
        </Select>

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
                onPress={async () => {
                  if (componentType.componentImage) {
                    const result = await deleteComponentImage(
                      componentType.componentImage.id,
                      componentType.componentImage.url,
                      componentType.id,
                      "componentType",
                    );
                    if (result?.ok) {
                      toast.success(result.message);
                      router.refresh();
                    } else {
                      toast.error(result?.message ?? "No se pudo eliminar la imagen");
                    }
                  }
                }}
              >
                Eliminar
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-gray-200 pt-4">
        <Switch {...register("state")}>Estado del componente</Switch>
        <div className="flex">
          <Button variant="light" onPress={() => router.back()}>
            Cancelar
          </Button>
          <Button type="submit" color="primary" isLoading={isLoading}>
            Guardar
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ComponentTypeForm;
