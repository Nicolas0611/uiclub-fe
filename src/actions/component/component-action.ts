"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter/PrismaAdapter";
import { IComponentTypeFindMany } from "@/interfaces/adapters/prisma-adapter-interface";
import { ComponentType } from "@/interfaces/design-system-interface";

interface FetchComponentListProps {
  page?: number;
  take?: number;
  search?: string;
  state?: boolean;
}
export const fetchComponentList = async ({
  page,
  take,
  search,
  state,
}: FetchComponentListProps): Promise<{
  currentPage: number;
  components: ComponentType[];
  totalPages: number;
}> => {
  try {
    const req = new PrismaAdapter<ComponentType[], IComponentTypeFindMany>(
      "ComponentType",
    );
    const pagination =
      page && take
        ? {
            take,
            skip: (page - 1) * take,
          }
        : {};
    const response = await req.findMany({
      ...pagination,
      include: {
        componentImage: {
          select: {
            url: true,
          },
        },
      },
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
        state: {
          equals: state,
        },
      },
    });

    const totalCount = await req.count({
      where: {
        state: state,
      },
    });
    const totalPages = Math.ceil(totalCount / (take || 10));

    return {
      currentPage: page || 1,
      components: response,
      totalPages: totalPages || 0,
    };
  } catch (error) {
    console.error(error);
    return {
      currentPage: 0,
      components: [],
      totalPages: 0,
    };
  }
};

export const fetchComponentTypeById = async ({
  slug,
}: {
  slug: string;
}): Promise<ComponentType | null> => {
  try {
    const req = new PrismaAdapter<ComponentType, IComponentTypeFindMany>(
      "ComponentType",
    );

    const response = await req.findFirst({
      where: {
        link: {
          contains: slug,
          mode: "insensitive",
        },
      },
      include: {
        relatedDesignSystems: {
          include: {
            designSystem: {
              select: {
                name: true,
                company: {
                  select: {
                    companyImage: {
                      select: { url: true },
                    },
                  },
                },
              },
            },
          },
        },
        figmaLinks: {
          select: {
            id: true,
            url: true,
            company: {
              select: { name: true },
            },
          },
        },
        componentImage: {
          select: {
            url: true,
          },
        },
      },
    });
    return response;
  } catch (error) {
    throw `Error fetching component with slug ${slug} - ${error}`;
  }
};

export const fetchRelatedCategories = async ({
  type,
}: {
  type: ComponentType["type"];
}): Promise<ComponentType[] | null> => {
  try {
    const componentTypeReq = new PrismaAdapter<
      ComponentType[],
      IComponentTypeFindMany
    >("ComponentType");

    const response = await componentTypeReq.findMany({
      include: {
        componentImage: {
          select: {
            url: true,
          },
        },
      },
      where: {
        type,
      },
    });
    return response;
  } catch (error) {
    throw `Error fetching component with type ${type} - ${error}`;
  }
};
