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
