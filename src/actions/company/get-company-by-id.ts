"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter";
import { ICompanyFindFirst } from "@/interfaces/adapters/prisma-adapter-interface";
import { Company } from "@/interfaces/company-interface";

export const getCompanyById = async (id: number) => {
  try {
    const req = new PrismaAdapter<Company, ICompanyFindFirst>("Company");
    const company = await req.findFirst({
      where: { id },
      include: { companyImage: true },
    });
    if (!company) {
      return {
        company: null,
        ok: false,
        message: "Company not found",
      };
    }
    return { company, ok: true, message: "Company found" };
  } catch (error) {
    console.error(error);
    return {
      company: null,
      ok: false,
      message: `Error getting company by id ${id} - ${error}`,
    };
  }
};
