"use server";

import { ComponentFormValues } from "@/app/dashboard/components/ui/ComponentForm/ComponentForm";
import { COMPONENT_TYPES } from "@/constants";
import { Component } from "@/interfaces/design-system-interface";
import { prisma } from "@/lib/prisma";
import { Types } from "@prisma/client";
import { revalidatePath } from "next/cache";
import z from "zod";
import { uploadImage } from "../cloudinary/upload-image";

const componentSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3).max(255),
  description: z.string().min(3),
  type: z.enum(COMPONENT_TYPES.map((type) => type.value)),
  state: z.boolean(),
  link: z.string().min(3).max(255),
  designSystemId: z.string(),
});
export const createUpdateComponent = async (
  component: ComponentFormValues,
  formData: FormData | null,
) => {
  const componentImage = formData?.get("componentImage");
  const componentParsed = componentSchema.safeParse(component);

  if (!componentImage) {
    return {
      message: "La imagen del componente es requerida",
      ok: false,
    };
  }

  if (!componentParsed.success) {
    return {
      message: componentParsed.error.message,
      ok: false,
    };
  }

  const componentData = componentParsed.data;
  const { id, name, description, type, state, link, designSystemId } =
    componentData;
  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      let component: Component;

      if (id) {
        component = await tx.component.update({
          where: { id: id },
          data: {
            name: name,
            description: description,
            type: type as Types,
            state: state,
            link: link,
            designSystemId: designSystemId,
          },
        });
        console.log({ updatedComponent: component });
      } else {
        component = await tx.component.create({
          data: {
            name: name,
            description: description,
            type: type as Types,
            state: state,
            link: link,
            designSystemId: designSystemId,
          },
        });
      }
      // Proceso de carga y guardado de imagenes
      if (componentImage && componentImage instanceof File) {
        const componentImageUrl = await uploadImage(
          componentImage as File,
          "/components",
        );
        if (!componentImageUrl) {
          throw new Error("Error al subir la imagen del componente");
        }
        await tx.componentImage.create({
          data: {
            url: componentImageUrl,
            name: component.name,
            componentId: component.id,
          },
        });
      }
      return component;
    });
    revalidatePath(`/dashboard/components`);
    revalidatePath(`/dashboard/design-systems/${designSystemId}`);

    return {
      ok: true,
      product: prismaTx,
      message: "Componente creado/actualizado exitosamente",
    };
  } catch (error) {
    console.error(error);
    throw `Error creating component ${error}`;
  }
};
