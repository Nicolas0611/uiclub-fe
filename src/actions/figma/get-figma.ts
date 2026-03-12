"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter/PrismaAdapter";
import { IFigmaFindMany } from "@/interfaces/adapters/prisma-adapter-interface";
import { FigmaLinks } from "@/interfaces/design-system-interface";

export const getFigma = async () => {
  try {
    const req = new PrismaAdapter<FigmaLinks[], IFigmaFindMany>("Figma");
    const response = await req.findMany({
      include: {
        company: {
          select: { name: true },
        },
        componentType: {
          select: { name: true },
        },
      },
    });
    return {
      data: response,
      ok: true,
      message: "Figma found",
    };
  } catch (error) {
    console.error(error);
    return { data: [], ok: false, message: "Error fetching figma" };
  }
};
