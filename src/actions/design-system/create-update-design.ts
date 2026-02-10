"use server";

import { DesignSystemFormValues } from "@/app/dashboard/design-systems/ui/DesignSystemForm";
import { prisma } from "@/lib/prisma";
import { DesignSystem } from "@prisma/client";
import { revalidatePath } from "next/cache";
import z from "zod";

const designSystemSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3).max(400),
  state: z.boolean(),
  popularity: z.enum(["HIGH", "MEDIUM", "LOW"]),
  isUpdated: z.boolean(),
  slug: z.string().min(3).max(255),
  isNew: z.boolean(),
  companyId: z.string(),
  companyImageId: z.string(),
  shortDescription: z.string().min(3),
  largeDescription: z.string().min(3),
});

export const createUpdateDesignSystem = async (
  designSystem: DesignSystemFormValues,
) => {
  const designSystemParsed = designSystemSchema.safeParse(designSystem);

  if (!designSystemParsed.success) {
    return {
      message: designSystemParsed.error.message,
      ok: false,
    };
  }

  const designSystemData = designSystemParsed.data;
  const { id, companyId, companyImageId, ...rest } = designSystemData;

  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      let designSystem: DesignSystem;

      if (id) {
        // Actualizar design system
        designSystem = await tx.designSystem.update({
          where: { id: id },
          data: {
            ...rest,
            companyId: Number(companyId),
            companyImageId: companyImageId,
          },
        });
        console.log({ updatedDesignSystem: designSystem });
      } else {
        //Crear empresa
        designSystem = await tx.designSystem.create({
          data: {
            ...rest,
            companyId: Number(companyId),
            companyImageId: companyImageId,
          },
        });
        console.log({ createdDesignSystem: designSystem });
      }
    });

    revalidatePath(`/dashboard/design-systems`);

    return {
      ok: true,
      product: prismaTx,
      message: "Compañía creada/actualizado exitosamente",
    };
  } catch (error) {
    console.error(error);
    return { ok: false, message: "Error al crear/actualizar la compañía" };
  }
};
