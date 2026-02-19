"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter";
import { IComponentFindMany } from "@/interfaces/adapters/prisma-adapter-interface";
import { Component } from "@/interfaces/design-system-interface";

interface IGetComponents {
  page: number;
  take?: number;
}
export const getComponents = async ({
  page = 1,
  take = 10,
}: IGetComponents) => {
  try {
    const req = new PrismaAdapter<Component[], IComponentFindMany>("Component");
    const response = await req.findMany({
      take,
      skip: (page - 1) * take,
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
              select: {
                name: true,
              },
            },
          },
        },
      },
      orderBy: {
        designSystem: {
          name: "asc",
        },
      },
    });
    const totalCount = await req.count({
      where: {
        state: true,
      },
    });
    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages: totalPages,
      components: response,
      ok: true,
    };
  } catch (error) {
    console.error(error);
    return {
      components: [],
      ok: false,
      message: `Error getting components ${error}`,
      totalPages: 0,
    };
  }
};
