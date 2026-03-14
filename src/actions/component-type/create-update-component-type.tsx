"use server";

import { ComponentTypeFormValues } from "@/app/dashboard/component-type/[id]/ui/ComponentTypeForm/ComponentTypeForm";
import { COMPONENT_TYPES } from "@/constants";
import { prisma } from "@/lib/prisma";
import { Prisma, Types } from "@prisma/client";
import { revalidatePath } from "next/cache";
import z from "zod";
import { uploadImage } from "../cloudinary/upload-image";

const componentTypeSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3).max(255),
  description: z.string().min(3).optional(),
  type: z.enum(COMPONENT_TYPES.map((type) => type.value)),
  state: z.boolean(),
  link: z.string().max(255).optional(),
  usageCount: z.coerce.number().int().min(0).default(0),
  designSystemCount: z.coerce.number().int().min(0).default(0),
  implementationsCount: z.coerce.number().int().min(0).default(0),
  componentImageId: z.string().optional(),
});

export const createUpdateComponentType = async (
  componentType: ComponentTypeFormValues,
  formData: FormData | null,
) => {
  const componentImage = formData?.get("componentImage");
  const componentTypeParsed = componentTypeSchema.safeParse(componentType);

  if (!componentTypeParsed.success) {
    return {
      message: componentTypeParsed.error.message,
      ok: false,
    };
  }

  const componentTypeData = componentTypeParsed.data;
  const {
    id,
    name,
    description,
    type,
    state,
    link,
    usageCount,
    designSystemCount,
    implementationsCount,
    componentImageId,
  } = componentTypeData;

  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      const componentImageCreated = await resolveImage(
        componentImage as File,
        tx,
        name,
      );

      const imageId = componentImageCreated?.id
        ? componentImageCreated.id
        : componentImageId;

      if (!imageId) {
        throw new Error(
          "Error al subir la imagen del tipo de componente, se necesita subir una imagen",
        );
      }

      const componentTypePayload = {
        name,
        description,
        type: type as Types,
        state,
        link,
        usageCount,
        designSystemCount,
        implementationsCount,
        componentImageId: imageId,
      };

      const savedComponentType = id
        ? await tx.componentType.update({
            where: { id },
            data: componentTypePayload,
          })
        : await tx.componentType.create({ data: componentTypePayload });

      return savedComponentType;
    });

    revalidatePath("/dashboard/component-types");

    return {
      ok: true,
      componentType: prismaTx,
      message: "Tipo de componente creado/actualizado exitosamente",
    };
  } catch (error) {
    console.error(error);
    throw new Error(
      `Error al crear/actualizar el tipo de componente: ${error}`,
    );
  }
};

const resolveImage = async (
  componentImage: File | null | undefined,
  tx: Prisma.TransactionClient,
  name: string,
) => {
  if (componentImage && componentImage instanceof File) {
    const componentImageUrl = await uploadImage(componentImage, "/components");

    if (!componentImageUrl) {
      throw new Error("Error al subir la imagen del tipo de componente");
    }

    return tx.componentImage.create({
      data: {
        url: componentImageUrl,
        name,
      },
    });
  }

  return null;
};
