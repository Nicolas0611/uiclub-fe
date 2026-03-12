"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter/PrismaAdapter";
import { IComponentImageFindMany } from "@/interfaces/adapters/prisma-adapter-interface";
import { ComponentImage } from "@/interfaces/design-system-interface";

export const getComponentImages = async () => {
  try {
    const req = new PrismaAdapter<ComponentImage[], IComponentImageFindMany>(
      "ComponentImage",
    );
    const response = await req.findMany();
    if (!response) return { images: [], ok: true, message: "No images found" };

    return { images: response, ok: true, message: "Images found" };
  } catch (error) {
    console.error(error);
    return {
      images: [],
      ok: false,
      message: `Error getting component images ${error}`,
    };
  }
};
