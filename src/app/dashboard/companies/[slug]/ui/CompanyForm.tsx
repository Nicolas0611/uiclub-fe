"use client";

import { createUpdateCompany } from "@/actions/company/create-update-company";
import Dropzone from "@/components/shared/Inputs/Drozpone/Dropzone";
import { Company } from "@/interfaces/company-interface";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import { Button, Checkbox, Image, Input } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export interface CompanyFormValues {
  id: number;
  name: string;
  state: boolean;
  companyImage: FileList;
}
interface CompanyFormProps {
  company: Company;
}
const CompanyForm = ({ company }: CompanyFormProps) => {
  const { register, handleSubmit } = useForm<CompanyFormValues>({
    defaultValues: {
      name: company.name,
      state: company.state,
      companyImage: undefined,
    },
  });
  console.log({ company });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: CompanyFormValues) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("companyImage", data.companyImage[0]);

    const result = await createUpdateCompany(data, formData);
    if (result?.ok) {
      toast.success(result.message);
      router.push("/dashboard/companies");
      setIsLoading(false);
    } else {
      toast.error(result.message);
      setIsLoading(false);
    }
  };

  const router = useRouter();

  return (
    <div className="container mx-auto bg-white p-4 border border-gray-200 rounded-2xl flex flex-col gap-4 w-full max-w-3xl">
      <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
        <BuildingStorefrontIcon className="size-5 text-gray-500" />
        <h1 className="text-sm text-gray-500">Nueva empresa</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 pb-4">
          <Input
            label="Nombre de la empresa"
            className="w-full"
            {...register("name")}
          />
          <Checkbox
            className="w-full"
            defaultChecked={true}
            {...register("state")}
          >
            Estado
          </Checkbox>
          <Dropzone register={register} name="companyImage" />
          {company.companyImage && (
            <div className="flex items-center flex-col gap-2">
              <Image
                src={company.companyImage[0].url}
                alt={company.companyImage[0].name}
                width={100}
                height={100}
              />
              <Button
                size="sm"
                type="button"
                variant="flat"
                color="danger"
                onPress={() => {
                  console.log("eliminar");
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
          <Button type="submit" color="primary" isLoading={isLoading}>
            Guardar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CompanyForm;
