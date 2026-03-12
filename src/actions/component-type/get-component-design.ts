import { PrismaAdapter } from "@/adapters/PrismaAdapter/PrismaAdapter";
import { IDesignSystemComponentTypeFindFirst } from "@/interfaces/adapters/prisma-adapter-interface";
import { DesignSystemComponentType } from "@prisma/client";

export const getComponentDesign = async ({ id }: { id: string }) => {
  if (id === "new")
    return { data: null, ok: true, message: "Component design not found" };

  try {
    const req = new PrismaAdapter<
      DesignSystemComponentType,
      IDesignSystemComponentTypeFindFirst
    >("DesignSystemComponentType");

    const response = await req.findFirst({
      where: {
        componentTypeId: id,
      },
    });

    if (!response) {
      return { data: null, ok: true, message: "Component design not found" };
    }

    return { data: response, ok: true, message: "Component design found" };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      ok: false,
      message: `Error fetching component design with id ${id} - ${error}`,
    };
  }
};
