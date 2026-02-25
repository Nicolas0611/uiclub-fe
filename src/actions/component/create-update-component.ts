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
  componentImageId: z.string().optional(),
});
export const createUpdateComponent = async (
  component: ComponentFormValues,
  formData: FormData | null,
) => {
  const componentImage = formData?.get("componentImage");
  const componentParsed = componentSchema.safeParse(component);

  console.log({ componentImage });
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

      // Actualizar component si no tiene una nueva imagen cargada, sino es una imagen que ya existe del modelo ComponentImage
      if (id) {
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
          component = await tx.component.update({
            where: { id: id },
            data: {
              name: name,
              description: description,
              type: type as Types,
              state: state,
              link: link,
              designSystemId: designSystemId,
              componentImageId: componentImageCreated.id,
            },
          });
        } else {
          component = await tx.component.update({
            where: { id: id },
            data: {
              name: name,
              description: description,
              type: type as Types,
              state: state,
              link: link,
              designSystemId: designSystemId,
              componentImageId: componentImageId,
            },
          });
        }
      } else {
        // Crear componente y imagen si no existe
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
          component = await tx.component.create({
            data: {
              name: name,
              description: description,
              type: type as Types,
              state: state,
              link: link,
              designSystemId: designSystemId,
              componentImageId: componentImageCreated.id,
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
              componentImageId: componentImageId ?? "",
            },
          });
        }
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
