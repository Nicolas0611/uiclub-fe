"use server";

import { CompanyFormValues } from "@/app/dashboard/companies/[slug]/ui/CompanyForm";
import { Company } from "@/interfaces/company-interface";
import { prisma } from "@/lib/prisma";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
import z from "zod";
import { uploadImage } from "../cloudinary/upload-image";
cloudinary.config(process.env.CLOUDINARY_URL || "");

const companySchema = z.object({
  id: z.number().optional(),
  name: z.string().min(3).max(255),
  state: z.boolean(),
});

export const createUpdateCompany = async (
  company: CompanyFormValues,
  formData: FormData | null,
) => {
  const companyImage = formData?.get("companyImage");
  const companyParsed = companySchema.safeParse(company);

  console.log({ companyImage });
  if (!companyImage) {
    return {
      message: "La imagen de la empresa es requerida",
      ok: false,
    };
  }

  if (!companyParsed.success) {
    return {
      message: companyParsed.error.message,
      ok: false,
    };
  }

  const companyData = companyParsed.data;
  console.log({ companyData });
  const { id, name, state } = companyData;

  try {
    const prismaTx = await prisma.$transaction(async (tx) => {
      let company: Company;

      if (id) {
        //Actualizar producto
        company = await tx.company.update({
          where: { id: Number(id) },
          data: {
            name: name,
            state: state,
          },
        });
        console.log({ updatedCompany: company });
      } else {
        //Crear empresa
        company = await tx.company.create({
          data: {
            name: name,
            state: state,
          },
        });
        console.log({ createdCompany: company });
      }
      // Proceso de carga y guardado de imagenes
      // Recorrer imagenes y guardarlas
      if (companyImage && companyImage instanceof File) {
        const companyImageUrl = await uploadImage(
          companyImage as File,
          "/design-system-thumbs",
        );
        if (!companyImageUrl) {
          throw new Error("Error al subir la imagen de la empresa");
        }
        await tx.companyImage.create({
          data: {
            url: companyImageUrl,
            name: company.name,
            companyId: company.id,
          },
        });
      }
      return company;
    });

    revalidatePath(`/dashboard/companies`);

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
