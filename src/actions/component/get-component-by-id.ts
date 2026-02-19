"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter";
import { IComponentFindFirst } from "@/interfaces/adapters/prisma-adapter-interface";
import { Component } from "@/interfaces/design-system-interface";

export const getComponentById = async (id: string) => {
  try {
    const req = new PrismaAdapter<Component, IComponentFindFirst>("Component");
    const component = await req.findFirst({
      where: { id },
      include: {
        componentImage: {
          select: {
            url: true,
          },
        },
        designSystem: {
          select: {
            name: true,
            company: {
              select: { name: true },
            },
          },
        },
      },
    });

    return { component, ok: true, message: "Component found" };
  } catch (error) {
    console.error(error);
    return {
      component: null,
      ok: false,
      message: `Error getting component by id ${id} - ${error}`,
    };
  }
};
