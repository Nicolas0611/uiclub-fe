"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter/PrismaAdapter";
import { ILinkFindFirst } from "@/interfaces/adapters/prisma-adapter-interface";
import { Link } from "@/interfaces/design-system-interface";

export const getLinkById = async (id: number) => {
  try {
    const req = new PrismaAdapter<Link, ILinkFindFirst>("Link");
    const link = await req.findFirst({
      where: { id: id },
      include: {
        designSystem: {
          select: {
            name: true,
          },
        },
      },
    });
    if (!link) return { link: null, ok: false, message: "Link not found" };
    return { link, ok: true, message: "Link found" };
  } catch (error) {
    console.error(error);
    return {
      link: null,
      ok: false,
      message: `Error fetching link by id ${id} - ${error}`,
    };
  }
};
