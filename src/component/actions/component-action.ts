import { PrismaAdapter } from "@/adapters/PrismaAdapter";
import { IComponentTypeFindMany } from "@/interfaces/adapters/prisma-adapter-interface";
import { ComponentType } from "@/interfaces/design-system-interface";

export const fetchComponentList = async (
  search: string
): Promise<ComponentType[]> => {
  try {
    const req = new PrismaAdapter<ComponentType[], IComponentTypeFindMany>(
      "ComponentType"
    );
    const response = await req.findMany({
      where: {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
      include: {
        relatedDesignSystems: {
          include: {
            designSystem: {
              select: {
                name: true,
                companyImage: { select: { url: true } },
                slug: true,
              },
            },
          },
        },
        figmaLinks: {
          select: {
            url: true,
            company: {
              select: { name: true },
            },
          },
        },
      },
    });

    return response;
  } catch (error) {
    throw `Error fetching components ${error}`;
  }
};

export const fetchComponentTypeById = async ({
  slug,
}: {
  slug: string;
}): Promise<ComponentType | null> => {
  try {
    const req = new PrismaAdapter<ComponentType, IComponentTypeFindMany>(
      "ComponentType"
    );

    const response = await req.findFirst({
      where: {
        name: {
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
                companyImage: { select: { url: true, name: true } },
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
      },
    });
    return response;
  } catch (error) {
    throw `Error fetching component with slug ${slug} - ${error}`;
  }
};
