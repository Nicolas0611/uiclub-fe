"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter/PrismaAdapter";
import { ILinkFindMany } from "@/interfaces/adapters/prisma-adapter-interface";
import { Link } from "@/interfaces/design-system-interface";

export const getLinks = async () => {
  try {
    const req = new PrismaAdapter<Link[], ILinkFindMany>("Link");
    const response = await req.findMany({
      include: {
        designSystem: {
          select: {
            name: true,
          },
        },
      },
    });
    if (!response) return { links: [], ok: false, message: "No links found" };

    return { links: response, ok: true, message: "Links found" };
  } catch (error) {
    console.error(error);
    return {
      links: [],
      ok: false,
      message: `Error fetching links ${error}`,
    };
  }
};
