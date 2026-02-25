"use server";

import { prisma } from "@/lib/prisma";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
cloudinary.config(process.env.CLOUDINARY_URL || "");

export const deleteComponentImage = async (
  imageId: string,
  imageUrl: string,
  componentId: string,
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
      await tx.component.update({
        where: { id: componentId },
        data: { componentImageId: null },
      });

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

    revalidatePath(`/dashboard/components`);
    revalidatePath(`/dashboard/components/${componentId}`);
    return {
      message: "Imagen del componente eliminada exitosamente",
      ok: true,
    };
  } catch (error) {
    console.log(error);
    throw `Error deleting component image ${error}`;
  }
};
