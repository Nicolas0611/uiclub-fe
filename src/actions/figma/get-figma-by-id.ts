"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter/PrismaAdapter";
import { IFigmaFindFirst } from "@/interfaces/adapters/prisma-adapter-interface";
import { FigmaLinks } from "@/interfaces/design-system-interface";

export const getFigmaById = async (id: string) => {
  try {
    const req = new PrismaAdapter<FigmaLinks, IFigmaFindFirst>("Figma");
    const figma = await req.findFirst({ where: { id } });
    if (!figma) return { data: null, ok: false, message: "Figma not found" };

    return { data: figma, ok: true, message: "Figma found" };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      ok: false,
      message: `Error fetching figma by id ${id} - ${error}`,
    };
  }
};
