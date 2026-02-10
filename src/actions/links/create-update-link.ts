"use server";

import { LinkFormValues } from "@/app/dashboard/links/ui/LinkForm";
import { Link } from "@/interfaces/design-system-interface";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import z from "zod";

const linkSchema = z.object({
  id: z.number().optional(),
  figma: z.string().optional(),
  web: z.string().optional(),
  storybook: z.string().optional(),
  designSystemId: z.string(),
});
export const createUpdateLink = async (link: LinkFormValues) => {
  const linkParsed = linkSchema.safeParse(link);
  if (!linkParsed.success) {
    return { link: null, ok: false, message: linkParsed.error.message };
  }
  const linkData = linkParsed.data;
  const { id, figma, web, storybook, designSystemId } = linkData;

  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      let link: Link;

      if (id) {
        // Actualizar link
        link = await tx.link.update({
          where: { id: id },
          data: { figma, web, storybook, designSystemId },
        });

        console.log({ updatedLink: link });
      } else {
        //Crear link
        link = await tx.link.create({
          data: { figma, web, storybook, designSystemId },
        });
        console.log({ createdLink: link });
      }
    });

    revalidatePath(`/dashboard/links`);
    revalidatePath(`/dashboard/design-systems/${designSystemId}`);
    return {
      link: prismaTx,
      ok: true,
      message: "Link creado/actualizado exitosamente",
    };
  } catch (error) {
    console.error(error);
    return {
      link: null,
      ok: false,
      message: "Error al crear/actualizar el link",
    };
  }
};
