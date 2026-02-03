"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter";
import { ICompanyFindMany } from "@/interfaces/adapters/prisma-adapter-interface";
import { Company } from "@/interfaces/company-interface";

export const getCompanies = async () => {
  try {
    const req = new PrismaAdapter<Company[], ICompanyFindMany>("Company");
    const response = await req.findMany({
      include: {
        companyImage: true,
        designSystem: {
          select: {
            name: true,
          },
        },
      },
    });
    if (!response)
      return { companies: [], ok: false, message: "No companies found" };
    return { companies: response, ok: true, message: "Companies found" };
  } catch (error) {
    console.error(error);
    return {
      companies: [],
      ok: false,
      message: `Error getting companies ${error}`,
    };
  }
};
