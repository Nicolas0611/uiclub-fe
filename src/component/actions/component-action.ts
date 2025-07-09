import { APIS } from "@/constants";
import { ComponentType } from "@/interfaces/design-system-interface";
import { https } from "@/lib/axios";

export const fetchComponentList = async (): Promise<ComponentType[]> => {
  try {
    const response = await https.get<ComponentType[]>(
      APIS.DESIGN_LIBRARIES.COMPONENT_TYPES
    );
    console.log(response.data);
    return response.status === 200 ? response.data : [];
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
    const response = await https.get<ComponentType>(
      APIS.DESIGN_LIBRARIES.COMPONENT_TYPES_BY_ID(slug)
    );
    return response.status === 200 ? response.data : null;
  } catch (error) {
    throw `Error fetching component with slug ${slug} - ${error}`;
  }
};
