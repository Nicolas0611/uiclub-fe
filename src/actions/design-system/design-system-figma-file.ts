"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter/PrismaAdapter";
import { IDesignSystemFindMany } from "@/interfaces/adapters/prisma-adapter-interface";
import { DesignSystem } from "@/interfaces/design-system-interface";

export const getDesignSystemFigmaFile = async () => {
  try {
    const req = new PrismaAdapter<DesignSystem[], IDesignSystemFindMany>(
      "DesignSystem",
    );
    const response = await req.findMany({
      where: {
        links: {
          figma: {
            not: null,
          },
        },
      },
      include: {
        links: {
          select: {
            figma: true,
          },
        },
        company: {
          select: {
            name: true,
            companyImage: {
              select: {
                url: true,
              },
            },
          },
        },
        _count: {
          select: {
            components: true,
            componentTypes: true,
          },
        },
      },
    });
    if (!response)
      return {
        data: [],
        ok: false,
        message: "No design system figma file found",
      };

    return {
      data: response,
      ok: true,
      message: "Design system figma file found",
    };
  } catch (err) {
    console.error(err);
    return {
      data: [],
      ok: false,
      message: `Error fetching design system figma file ${err}`,
    };
  }
};
