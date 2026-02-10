"use client";

import { createUpdateLink } from "@/actions/links/create-update-link";
import { Link } from "@/interfaces/design-system-interface";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface LinkFormProps {
  link: Link;
  designSystemsOptions: { label: string; value: string }[];
}

export interface LinkFormValues {
  id: number;
  figma: string | null;
  web: string | null;
  storybook: string | null;
  designSystemId: string;
}

const LinkForm = ({ link, designSystemsOptions }: LinkFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<LinkFormValues>({
    defaultValues: {
      id: link.id,
      figma: link.figma,
      web: link.web,
      storybook: link.storybook,
      designSystemId: link.designSystemId,
    },
  });

  const onSubmit = async (data: LinkFormValues) => {
    setIsLoading(true);
    const result = await createUpdateLink(data);
    if (result?.ok) {
      toast.success(result.message);
      router.push("/dashboard/links");
      setIsLoading(false);
    } else {
      toast.error(result.message);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 pb-4">
        <Input label="Web" {...register("web")} />
        <Input label="Storybook" {...register("storybook")} />
        <Input label="Figma" {...register("figma")} />

        <Select label="Design System" {...register("designSystemId")}>
          {designSystemsOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>
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
  );
};

export default LinkForm;
