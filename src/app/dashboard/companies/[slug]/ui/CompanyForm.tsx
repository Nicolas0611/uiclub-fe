"use client";

import { createUpdateCompany } from "@/actions/company/create-update-company";
import Dropzone from "@/components/shared/Inputs/Drozpone/Dropzone";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import { Button, Checkbox, Input } from "@heroui/react";
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
const CompanyForm = () => {
  const { register, handleSubmit } = useForm<CompanyFormValues>({
    defaultValues: {
      name: "",
      state: true,
      companyImage: undefined,
    },
  });
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
