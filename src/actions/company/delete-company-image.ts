"use server";
import { PrismaAdapter } from "@/adapters/PrismaAdapter";
import { ICompanyImageDelete } from "@/interfaces/adapters/prisma-adapter-interface";
import { CompanyImage } from "@/interfaces/design-system-interface";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
cloudinary.config(process.env.CLOUDINARY_URL || "");

export const deleteCompanyImage = async (imageId: string, imageUrl: string) => {
  if (!imageUrl.startsWith("http")) {
    return {
      ok: false,
      message: "No se pudo eliminar la imagen",
    };
  }

  const imageName = imageUrl.split("/").pop()?.split(".")[0] || "";

  console.log({ imageName });

  try {
    const result = await cloudinary.uploader.destroy(
      `design-system-thumbs/${imageName}`,
    );
    if (result.result === "not found") {
      return {
        ok: false,
        message: "No se pudo eliminar la imagen",
      };
    }

    const req = new PrismaAdapter<CompanyImage, ICompanyImageDelete>(
      "CompanyImage",
    );

    await req.delete({
      where: { id: imageId },
    });

    //Revalidar los paths
    revalidatePath(`/dashboard/companies`);
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "No se pudo eliminar la imagen",
    };
  }
};
