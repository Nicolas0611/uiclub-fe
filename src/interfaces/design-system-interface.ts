export interface Company {
  id: number;
  name: string;
  companyImage?: CompanyImage[];
}

export type Popularity = "MEDIUM" | "HIGH" | "LOW";

export interface CompanyImage {
  id: string;
  dateCreated: Date;
  state: boolean;
  url: string;
  name: string;
}

export interface Link {
  id: number;
  dateCreated: Date;
  state: boolean;
  web: string | null;
  storybook: string | null;
  figma: string | null;
  designSystemId: string;
}

//TODO: Fix the design system interface
export interface DesignSystem {
  id: string;
  companyId: number;
  shortDescription: string;
  largeDescription: string;
  company?: Company;
  components?: ComponentType[];
  name: string;
  popularity: Popularity;
  isUpdated: boolean;
  slug: string;
  links?: {
    web: string;
    storybook: string;
    figma: string;
  };
  state: boolean;
  _count?: { components: number };
  isNew: boolean;
}

type Type =
  | "Overlays"
  | "Data"
  | "Input"
  | "Status"
  | "Navigation"
  | "Loading"
  | "Messaging"
  | "Action"
  | "Images"
  | "Layout"
  | "Form";

export interface Component {
  id: string;
  name: string;
  description: string;
  type: Type;
  state: boolean;
  link: string;
  designSystem?: DesignSystem;
  designSystemId: string;
  componentImage?: ComponentImage;
}

export interface FigmaLinks {
  componentTypeId?: string;
  companyId?: number;
  id: string;
  state: boolean;
  company: Company;
  componentType: ComponentType;
  url: string;
}

export interface ComponentImage {
  id: string;
  url: string;
  name: string;
}

export interface ComponentType extends Component {
  componentImage: ComponentImage;
  name: string;
  description: string;
  category: string;
  usageCount: number;
  figmaLinks: FigmaLinks[];
  designSystemCount: number;
  relatedDesignSystems: { designSystem: DesignSystem }[];
  id: string;
}
