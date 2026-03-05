"use client";

import { FigmaLinks } from "@/interfaces/design-system-interface";
import { Input } from "@heroui/react";
import { useForm } from "react-hook-form";

export interface FigmaFormValues {
  id: string;
  url: string;
  state: boolean;
  companyId: string;
  componentTypeId: string;
}

interface FigmaFormProps {
  figma: FigmaLinks;
}

const FigmaForm = ({ figma }: FigmaFormProps) => {
  const { register, handleSubmit } = useForm<FigmaFormValues>({
    defaultValues: {
      url: figma?.url,
      state: figma?.state,
      companyId: figma?.company?.id.toString(),
      componentTypeId: figma?.componentType?.id,
    },
  });
  const onSubmit = async (data: FigmaFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="URL de Figma" {...register("url")} />
    </form>
  );
};

export default FigmaForm;
