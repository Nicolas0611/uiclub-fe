"use server";

import { FigmaFormValues } from "@/app/dashboard/figma/[id]/ui/FigmaForm/FigmaForm";
import { FigmaLinks } from "@/interfaces/design-system-interface";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import z from "zod";

const figmaSchema = z.object({
  id: z.string().optional(),
  url: z.string().min(3),
  state: z.boolean(),
  companyId: z.number(),
  componentTypeId: z.string(),
});

export const createUpdateFigma = async (data: FigmaFormValues) => {
  const figmaParsed = figmaSchema.safeParse(data);
  if (!figmaParsed.success) {
    return {
      message: figmaParsed.error.message,
      ok: false,
    };
  }
  const figmaData = figmaParsed.data;
  const { id, url, state, companyId, componentTypeId } = figmaData;

  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      let figma: FigmaLinks;
      if (id) {
        figma = await tx.figma.update({
          where: { id: id },
          data: { url, state, companyId, componentTypeId },
        });
      } else {
        figma = await tx.figma.create({
          data: { url, state, companyId, componentTypeId },
        });
      }
      if (!figma) {
        throw new Error("Error creating/updating Figma link");
      }
      return figma;
    });

    revalidatePath(`/dashboard/figma`);
    revalidatePath(`/dashboard/figma/${id}`);

    return {
      figma: prismaTx,
      ok: true,
      message: "Figma creado/actualizado exitosamente",
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Error al crear/actualizar el figma",
      ok: false,
    };
  }
};
