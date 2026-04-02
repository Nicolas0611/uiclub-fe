"use server";

import { ComponentFormValues } from "@/app/dashboard/components/ui/ComponentForm/ComponentForm";
import { COMPONENT_TYPES } from "@/constants";
import { Component } from "@/interfaces/design-system-interface";
import { prisma } from "@/lib/prisma";
import { Prisma, Types } from "@prisma/client";
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
  componentImageId: z.string().optional(),
});

export const createUpdateComponent = async (
  component: ComponentFormValues,
  formData: FormData | null,
) => {
  const componentImage = formData?.get("componentImage");
  const componentParsed = componentSchema.safeParse(component);

  if (!componentParsed.success) {
    return {
      message: componentParsed.error.message,
      ok: false,
    };
  }
  const componentData = componentParsed.data;
  const {
    id,
    name,
    description,
    type,
    state,
    link,
    designSystemId,
    componentImageId,
  } = componentData;

  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      let component: Component;

      const componentImageCreated = await resolveImage(
        componentImage as File,
        tx,
        name,
      );
      // Use the newly uploaded image id, or fall back to the existing ComponentImage id
      const imageId = componentImageCreated?.id
        ? componentImageCreated.id
        : componentImageId;

      if (!imageId) {
        throw new Error(
          "Error al subir la imagen del componente, se necesita subir una imagen",
        );
      }
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
            componentImageId: imageId,
          },
        });
      } else {
        component = await tx.component.create({
          data: {
            name: name,
            description: description,
            type: type as Types,
            state: state,
            link: link,
            designSystemId: designSystemId,
            componentImageId: imageId,
          },
        });
      }
      return component;
    });

    revalidatePath(`/dashboard/components`);
    revalidatePath(`/dashboard/design-systems/${designSystemId}`);

    return {
      ok: true,
      data: prismaTx,
      message: "Componente creado/actualizado exitosamente",
    };
  } catch (error) {
    console.error(error);
    throw `Error creating component ${error}`;
  }
};

const resolveImage = async (
  componentImage: File | null | undefined,
  tx: Prisma.TransactionClient,
  name: string,
) => {
  if (componentImage && componentImage instanceof File) {
    const componentImageUrl = await uploadImage(
      componentImage as File,
      "/components",
    );
    if (!componentImageUrl) {
      throw new Error("Error al subir la imagen del componente");
    }
    const componentImageCreated = await tx.componentImage.create({
      data: {
        url: componentImageUrl,
        name: name,
      },
    });
    return componentImageCreated;
  }
  return null;
};
