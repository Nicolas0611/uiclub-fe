"use client";

import { Popularity } from "@/interfaces/design-system-interface";
import { Button, Input, Select, SelectItem, Switch } from "@heroui/react";
import { useForm } from "react-hook-form";

export interface DesignSystemFormValues {
  name: string;
  shortDescription: string;
  largeDescription: string;
  state: boolean;
  popularity: Popularity;
  isUpdated: boolean;
  slug: string;
  isNew: boolean;
  companyId: number;
  companyImageId: string;
}
const DesignSystemForm = () => {
  const { register, handleSubmit } = useForm<DesignSystemFormValues>({
    defaultValues: {
      name: "",
      shortDescription: "",
      largeDescription: "",
      state: true,
      popularity: "LOW",
      isUpdated: true,
      slug: "",
      isNew: false,
      companyId: 0,
      companyImageId: "",
    },
  });
  const onSubmit = (data: DesignSystemFormValues) => {
    console.log(data);
  };
  return (
    <div>
      <form
        className="flex flex-col gap-4 pb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input label="Nombre del design system" {...register("name")} />
        <div className="flex items-center gap-2 flex-row">
          <Select label="Company" {...register("companyId")}>
            <SelectItem value="1">Company 1</SelectItem>
            <SelectItem value="2">Company 2</SelectItem>
            <SelectItem value="3">Company 3</SelectItem>
          </Select>

          <Select label="Company Image" {...register("companyImageId")}>
            <SelectItem value="1">Company Image 1</SelectItem>
            <SelectItem value="2">Company Image 2</SelectItem>
            <SelectItem value="3">Company Image 3</SelectItem>
          </Select>
        </div>
        <Input label="Descripción corta" {...register("shortDescription")} />
        <Input label="Descripción larga" {...register("largeDescription")} />
        <Input label="Slug" {...register("slug")} />
        <Input label="Popularity" {...register("popularity")} />

        <div className=" border border-gray-200 p-4 rounded-lg flex items-center gap-2">
          <Switch {...register("isUpdated")}>Esta actualizado</Switch>
          <Switch {...register("isNew")}>Es nuevo</Switch>
          <Switch {...register("state")}>State</Switch>
        </div>
        <Button type="submit" color="primary">
          Guardar
        </Button>
      </form>
    </div>
  );
};

export default DesignSystemForm;
