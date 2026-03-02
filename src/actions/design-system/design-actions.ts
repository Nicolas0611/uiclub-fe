"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter";
import {
  IDesignSystemFindFirst,
  IDesignSystemFindMany,
} from "@/interfaces/adapters/prisma-adapter-interface";
import { DesignSystem } from "@/interfaces/design-system-interface";

export const fetchDesignSystems = async (
  search?: string,
  state?: boolean,
): Promise<DesignSystem[]> => {
  try {
    const req = new PrismaAdapter<DesignSystem[], IDesignSystemFindMany>(
      "DesignSystem",
    );
    const response = await req.findMany({
      where: {
        name: search,
        state: state,
      },
      include: {
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
          },
        },
      },
    });
    return response;
  } catch (error) {
    throw `Error fetching design systems here ${error}`;
  }
};

export const fetchDesignSystemsBySlug = async (
  slug?: string,
  componentState?: boolean,
): Promise<DesignSystem | null> => {
  try {
    const req = new PrismaAdapter<DesignSystem, IDesignSystemFindFirst>(
      "DesignSystem",
    );
    const designSystem = await req.findFirst({
      where: { slug },
      include: {
        components: {
          include: {
            componentImage: {
              select: {
                url: true,
              },
            },
          },
          where: {
            state: componentState,
          },
        },
        company: true,
        links: true,
      },
    });
    return designSystem;
  } catch (error) {
    throw `Error fetching design systems id #${slug} - ${error}`;
  }
};

export const fetchDesignSystemsById = async (
  id?: string,
): Promise<DesignSystem | null> => {
  try {
    const req = new PrismaAdapter<DesignSystem, IDesignSystemFindFirst>(
      "DesignSystem",
    );
    const designSystem = await req.findFirst({
      where: { id },
    });
    return designSystem;
  } catch (error) {
    throw `Error fetching design systems id #${id} - ${error}`;
  }
};
