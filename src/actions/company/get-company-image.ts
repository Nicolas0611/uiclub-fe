"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter/PrismaAdapter";
import { ICompanyImageFindMany } from "@/interfaces/adapters/prisma-adapter-interface";
import { CompanyImage } from "@/interfaces/design-system-interface";

export const getCompanyImages = async () => {
  try {
    const req = new PrismaAdapter<CompanyImage[], ICompanyImageFindMany>(
      "CompanyImage",
    );
    const response = await req.findMany();
    if (!response)
      return { images: [], ok: true, message: "No companies images found" };

    return { images: response, ok: true, message: "Companies images found" };
  } catch (error) {
    console.error(error);
    return {
      images: [],
      ok: false,
      message: `Error getting company images ${error}`,
    };
  }
};
