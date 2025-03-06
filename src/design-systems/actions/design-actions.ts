"use server";

import { DesignSystem } from "@/interfaces/design-system-interface";
import { https } from "@/lib/axios";

export const fetchDesignSystems = async (
  search?: string
): Promise<DesignSystem[]> => {
  try {
    const response = await https.get<DesignSystem[]>(
      "design-libraries/design-systems/",
      {
        params: {
          search: search,
        },
      }
    );
    return response.status === 200 ? response.data : [];
  } catch {
    throw "Error fetching design systems:";
  }
};

export const fetchDesignSystemsById = async ({
  slug,
}: {
  slug: string;
}): Promise<DesignSystem | null> => {
  try {
    const response = await https.get<DesignSystem>(
      `design-libraries/design-systems/${slug}/`
    );
    return response.status === 200 ? response.data : null;
  } catch {
    throw `Error fetching design systems id #${slug}`;
  }
};
