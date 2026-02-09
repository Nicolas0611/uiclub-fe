"use client";

import { Link } from "@/interfaces/design-system-interface";
import { Button, Input } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface LinkFormProps {
  link: Link;
}

interface LinkFormValues {
  figma: string;
  web: string;
  storybook: string;
}

const LinkForm = ({ link }: LinkFormProps) => {
  const router = useRouter();
  const [isLoading, _] = useState(false);
  const { register, handleSubmit } = useForm<LinkFormValues>({
    defaultValues: {
      figma: link.figma,
      web: link.web,
      storybook: link.storybook,
    },
  });

  const onSubmit = (data: LinkFormValues) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4 pb-4">
        <Input label="Web" {...register("web")} />
        <Input label="Storybook" {...register("storybook")} />
        <Input label="Figma" {...register("figma")} />
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
