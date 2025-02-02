"use server";

import { DesignSystem } from "@/interfaces/design-system-interface";
import { https } from "@/lib/axios";

export const fetchDesignSystems = async (): Promise<DesignSystem[]> => {
  try {
    const response = await https.get<DesignSystem[]>(
      "design-libraries/design-systems/"
    );
    return response.status === 200 ? response.data : [];
  } catch {
    throw "Error fetching design systems:";
  }
};

export const fetchDesignSystemsById = async ({
  id,
}: {
  id: string;
}): Promise<DesignSystem | null> => {
  try {
    const response = await https.get<DesignSystem>(
      `design-libraries/design-systems/${id}/`
    );
    return response.status === 200 ? response.data : null;
  } catch {
    throw `Error fetching design systems id #${id}`;
  }
};
