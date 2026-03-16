"use server";

import { prisma } from "@/lib/prisma";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
cloudinary.config(process.env.CLOUDINARY_URL || "");

export type ComponentImageOwnerModel = "component" | "componentType";

export const deleteComponentImage = async (
  imageId: string,
  imageUrl: string,
  entityId: string,
  model: ComponentImageOwnerModel = "component",
) => {
  if (!imageUrl.startsWith("http")) {
    return {
      ok: false,
      message: "No se pudo eliminar la imagen",
    };
  }
  const imageName = imageUrl.split("/").pop()?.split(".")[0] || "";

  try {
    await prisma.$transaction(async (tx) => {
      if (model === "component") {
        await tx.component.update({
          where: { id: entityId },
          data: { componentImageId: null },
        });
      } else {
        await tx.componentType.update({
          where: { id: entityId },
          data: { componentImageId: null },
        });
      }

      const result = await cloudinary.uploader.destroy(
        `components/${imageName}`,
      );

      if (result.result === "not found") {
        throw new Error("La imagen no existe en Cloudinary");
      }

      await tx.componentImage.delete({
        where: { id: imageId },
      });
    });

    if (model === "component") {
      revalidatePath(`/dashboard/components`);
      revalidatePath(`/dashboard/components/${entityId}`);
    } else {
      revalidatePath(`/dashboard/component-type`);
      revalidatePath(`/dashboard/component-type/${entityId}`);
    }

    return {
      message: "Imagen eliminada exitosamente",
      ok: true,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: `Error al eliminar la imagen: ${error}`,
    };
  }
};
