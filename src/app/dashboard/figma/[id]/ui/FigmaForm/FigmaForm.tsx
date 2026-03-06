"use client";

import {
  Company,
  ComponentType,
  FigmaLinks,
} from "@/interfaces/design-system-interface";
import { Button, Input, Select, SelectItem, Switch } from "@heroui/react";
import { useRouter } from "next/navigation";
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
  companies: Company[];
  componentTypes: ComponentType[];
}

const FigmaForm = ({ figma, companies, componentTypes }: FigmaFormProps) => {
  const { register, handleSubmit } = useForm<FigmaFormValues>({
    defaultValues: {
      url: figma?.url,
      state: figma?.state,
      companyId: figma?.company?.id.toString(),
      componentTypeId: figma?.componentType?.id,
    },
  });
  const companiesOptions = companies.map((company) => ({
    label: company.name,
    value: company.id,
  }));
  const componentTypesOptions = componentTypes.map((componentType) => ({
    label: componentType.name,
    value: componentType.id,
  }));
  const router = useRouter();

  const onSubmit = async (data: FigmaFormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 pb-4">
        <Input label="URL de Figma" {...register("url")} />
        <Select label="Company" {...register("companyId")}>
          {companiesOptions.map((company) => (
            <SelectItem key={company.value} value={company.value}>
              {company.label}
            </SelectItem>
          ))}
        </Select>
        <Select label="Tipo de componente" {...register("componentTypeId")}>
          {componentTypesOptions.map((componentType) => (
            <SelectItem key={componentType.value} value={componentType.value}>
              {componentType.label}
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
          <Button type="submit" color="primary">
            Guardar
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FigmaForm;
