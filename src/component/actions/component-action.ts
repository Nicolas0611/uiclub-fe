import { ComponentType } from "@/interfaces/design-system-interface";
import { https } from "@/lib/axios";

export const fetchComponentList = async (): Promise<ComponentType[]> => {
  try {
    const response = await https.get<ComponentType[]>(
      "design-libraries/component-types/"
    );
    console.log(response.data);
    return response.status === 200 ? response.data : [];
  } catch (error) {
    throw `Error fetching components ${error}`;
  }
};
