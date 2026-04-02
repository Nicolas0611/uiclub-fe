"use client";

import { createUpdateComponent } from "@/actions/component/create-update-component";
import { deleteComponentImage } from "@/actions/component/delete-component-image";
import Dropzone from "@/components/shared/Inputs/Dropzone/Dropzone";
import { COMPONENT_TYPES } from "@/constants";
import {
  Component,
  ComponentImage,
  DesignSystem,
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

export interface ComponentFormValues {
  id: string;
  name: string;
  description: string;
  type: string;
  state: boolean;
  link: string;
  designSystemId: string;
  componentImage: FileList;
  componentImageId: string | null;
}
interface ComponentFormProps {
  component: Component;
  designSystems: DesignSystem[];
  componentImages: ComponentImage[];
}
const ComponentForm = ({
  component,
  designSystems,
  componentImages,
}: ComponentFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  //Todo: Verificar si la imagen ya existe en el componente y hacer un switch para habilitar el dropzone o no

  const designSystemsOptions = useMemo(
    () =>
      designSystems.map((designSystem) => ({
        label: designSystem.name,
        value: designSystem.id,
      })),
    [designSystems],
  );
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

  const { register, handleSubmit } = useForm<ComponentFormValues>({
    defaultValues: {
      name: component.name,
      description: component.description,
      type: component.type,
      state: component.state,
      link: component.link,
      designSystemId: component.designSystemId,
      componentImage: undefined,
      componentImageId: component.componentImage?.id ?? "",
    },
  });

  const onSubmit = async (data: ComponentFormValues) => {
    setIsLoading(true);
    const formData = new FormData();

    if (data.componentImage) {
      formData.append("componentImage", data.componentImage[0]);
    }
    data.id = component.id ?? undefined;

    const result = await createUpdateComponent(data, formData);
    if (result?.ok) {
      toast.success(result.message);
      setIsLoading(false);
      router.push("/dashboard/components");
    } else {
      toast.error(result.message);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <Input label="Nombre del componente" {...register("name")} />
        <Textarea
          label="Descripción del componente"
          {...register("description")}
        />
        <div className="flex flex-row gap-2">
          <Select label="Tipo de componente" {...register("type")}>
            {COMPONENT_TYPES.map((type) => (
              <SelectItem key={type.value}>{type.label}</SelectItem>
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
        <Input label="Link del componente" {...register("link")} />
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
          {component.componentImage && (
            <div className="flex items-center flex-col gap-2">
              <Image
                src={component.componentImage.url}
                alt={component.componentImage.name}
                width={600}
              />
              <Button
                size="sm"
                type="button"
                variant="flat"
                color="danger"
                onPress={async () => {
                  if (component.componentImage) {
                    const result = await deleteComponentImage(
                      component.componentImage.id,
                      component.componentImage.url,
                      component.id,
                      "component",
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
      </div>
    </form>
  );
};

export default ComponentForm;
