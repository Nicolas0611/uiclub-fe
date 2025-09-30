"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter";
import {
  IDesignSystemFindFirst,
  IDesignSystemFindMany,
} from "@/interfaces/adapters/prisma-adapter-interface";
import { DesignSystem } from "@/interfaces/design-system-interface";
import { prisma } from "@/lib/prisma";

export const fetchDesignSystems = async (
  search?: string
): Promise<DesignSystem[]> => {
  try {
    const req = new PrismaAdapter<DesignSystem[], IDesignSystemFindMany>(
      prisma,
      "DesignSystem"
    );
    const response = await req.findMany({
      where: {
        name: search,
      },
      include: {
        company: {
          select: {
            name: true,
          },
        },
        _count: {
          select: {
            components: true,
          },
        },
      },
    });
    return response;
  } catch (error) {
    throw `Error fetching design systems ${error}`;
  }
};

export const fetchDesignSystemsById = async (
  slug?: string
): Promise<DesignSystem | null> => {
  try {
    const req = new PrismaAdapter<DesignSystem, IDesignSystemFindFirst>(
      prisma,
      "DesignSystem"
    );
    const designSystem = await req.findFirst({
      where: { slug },
      include: {
        components: true,
        company: true,
      },
    });
    return designSystem;
  } catch (error) {
    throw `Error fetching design systems id #${slug} - ${error}`;
  }
};
