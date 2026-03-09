"use client";

import { createUpdateFigma } from "@/actions/figma/create-update-figma";
import {
  Company,
  ComponentType,
  FigmaLinks,
} from "@/interfaces/design-system-interface";
import { Button, Input, Select, SelectItem, Switch } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export interface FigmaFormValues {
  id?: string;
  url: string;
  state: boolean;
  companyId: number;
  componentTypeId: string;
}

interface FigmaFormProps {
  figma: FigmaLinks;
  companies: Company[];
  componentTypes: ComponentType[];
}

const FigmaForm = ({ figma, companies, componentTypes }: FigmaFormProps) => {
  const { register, handleSubmit } = useForm<FigmaFormValues>({
    defaultValues: {
      url: figma?.url,
      state: figma?.state,
      companyId: figma?.companyId,
      componentTypeId: figma?.componentTypeId,
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (data: FigmaFormValues) => {
    setIsLoading(true);
    const result = await createUpdateFigma({
      id: figma?.id,
      url: data.url,
      state: data.state,
      companyId: Number(data.companyId),
      componentTypeId: data.componentTypeId,
    });
    if (result?.ok) {
      toast.success(result.message);
      router.push("/dashboard/figma");
      setIsLoading(false);
    } else {
      toast.error(result.message);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 pb-4">
        <Input label="URL de Figma" {...register("url")} />
        <Select label="Company" {...register("companyId")}>
          {companies.map((company) => (
            <SelectItem key={company.id} value={company.id}>
              {company.name}
            </SelectItem>
          ))}
        </Select>
        <Select label="Tipo de componente" {...register("componentTypeId")}>
          {componentTypes.map((componentType) => (
            <SelectItem key={componentType.id} value={componentType.id}>
              {componentType.name}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex justify-between items-center border-t border-gray-200 pt-4">
        <Switch {...register("state")}>Estado del componente</Switch>

        <div className="flex">
          <Button variant="light" onPress={() => router.back()}>
            Cancelar
          </Button>
          <Button isLoading={isLoading} type="submit" color="primary">
            Guardar
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FigmaForm;
