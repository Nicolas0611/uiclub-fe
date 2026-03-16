"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter/PrismaAdapter";
import { IComponentTypeFindMany } from "@/interfaces/adapters/prisma-adapter-interface";
import { ComponentType } from "@/interfaces/design-system-interface";

export const getComponentTypeById = async ({ id }: { id: string }) => {
  if (id === "new")
    return { data: null, ok: true, message: "Component type found" };
  try {
    const req = new PrismaAdapter<ComponentType, IComponentTypeFindMany>(
      "ComponentType",
    );

    const response = await req.findFirst({
      where: {
        id,
      },
      include: {
        componentImage: {
          select: {
            url: true,
            id: true,
          },
        },
      },
    });
    return { data: response, ok: true, message: "Component type found" };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      ok: false,
      message: `Error fetching component with slug  ${id} - ${error}`,
    };
  }
};
