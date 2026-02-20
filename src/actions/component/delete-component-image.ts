"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter";
import { IComponentImageDelete } from "@/interfaces/adapters/prisma-adapter-interface";
import { ComponentImage } from "@/interfaces/design-system-interface";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
cloudinary.config(process.env.CLOUDINARY_URL || "");

export const deleteComponentImage = async (
  imageId: string,
  imageUrl: string,
) => {
  if (!imageUrl.startsWith("http")) {
    return {
      ok: false,
      message: "No se pudo eliminar la imagen",
    };
  }
  const imageName = imageUrl.split("/").pop()?.split(".")[0] || "";

  try {
    const result = await cloudinary.uploader.destroy(`components/${imageName}`);
    if (result.result === "not found") {
      return {
        ok: false,
        message: "No se pudo eliminar la imagen",
      };
    }
    const req = new PrismaAdapter<ComponentImage, IComponentImageDelete>(
      "ComponentImage",
    );
    await req.delete({
      where: { id: imageId },
    });
    revalidatePath(`/dashboard/components`);
    return {
      message: "Imagen del componente eliminada exitosamente",
      ok: true,
    };
  } catch (error) {
    console.log(error);
    throw `Error deleting component image ${error}`;
  }
};
