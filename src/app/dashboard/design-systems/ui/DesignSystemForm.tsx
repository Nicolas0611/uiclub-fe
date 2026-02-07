"use client";

import { createUpdateDesignSystem } from "@/actions/design-system/create-update-design";
import { Company } from "@/interfaces/company-interface";
import {
  CompanyImage,
  DesignSystem,
  Popularity,
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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

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

interface DesignSystemFormProps {
  designSystem: DesignSystem;
  companyImages: CompanyImage[];
  companies: Company[];
}
const POPULARITY_OPTIONS = [
  { key: "HIGH", value: "HIGH" },
  { key: "MEDIUM", value: "MEDIUM" },
  { key: "LOW", value: "LOW" },
];

const DesignSystemForm = ({
  designSystem,
  companyImages,
  companies,
}: DesignSystemFormProps) => {
  const { register, handleSubmit } = useForm<DesignSystemFormValues>({
    defaultValues: {
      ...designSystem,
    },
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: DesignSystemFormValues) => {
    setIsLoading(true);
    const result = await createUpdateDesignSystem(data);
    if (result?.ok) {
      toast.success(result.message);
      setIsLoading(false);
      router.push("/dashboard/design-systems");
    } else {
      toast.error(result.message);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <Input label="Nombre del design system" {...register("name")} />
        <div className="flex items-center gap-2 flex-row">
          <Select label="Company" {...register("companyId")}>
            {companies.map((company) => (
              <SelectItem key={company.id} value={company.id}>
                {company.name}
              </SelectItem>
            ))}
          </Select>

          <Select label="Company Image" {...register("companyImageId")}>
            {companyImages.map((companyImage) => (
              <SelectItem
                startContent={
                  <Image
                    src={companyImage.url}
                    alt={companyImage.name}
                    width={20}
                    height={20}
                    fallbackSrc="https://placehold.co/100x100"
                  />
                }
                key={companyImage.id}
                value={companyImage.id}
              >
                {companyImage.name}
              </SelectItem>
            ))}
          </Select>
        </div>
        <Textarea label="Descripción corta" {...register("shortDescription")} />
        <Textarea label="Descripción larga" {...register("largeDescription")} />
        <Input label="Slug" {...register("slug")} />

        <Select label="Popularity" {...register("popularity")}>
          {POPULARITY_OPTIONS.map((option) => (
            <SelectItem key={option.key} value={option.value}>
              {option.value}
            </SelectItem>
          ))}
        </Select>

        <div className=" border border-gray-200 p-4 rounded-lg flex items-center gap-2">
          <Switch {...register("isUpdated")}>Esta actualizado</Switch>
          <Switch {...register("isNew")}>Es nuevo</Switch>
          <Switch {...register("state")}>State</Switch>
        </div>
        <div className="flex justify-end gap-4 border-t border-gray-200 pt-4">
          <Button variant="light" onPress={() => router.back()}>
            Cancelar
          </Button>
          <Button type="submit" color="primary" isLoading={isLoading}>
            Guardar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DesignSystemForm;
