export interface Company {
  id: number;
  name: string;
}

export type Popularity = "MEDIUM" | "HIGH" | "LOW";

export interface CompanyImage {
  url: string;
  name: string;
}
export interface DesignSystem {
  id: number;
  shortDescription: string;
  largeDescription: string;
  company: Company;
  components: ComponentType[];
  name: string;
  popularity: Popularity;
  isUpdated: boolean;
  companyImage: CompanyImage;
  slug: string;
  links?: {
    web: string;
    storybook: string;
    figma: string;
  };
  _count: { components: number };
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
  name: string;
  description: string;
  type: Type;
  link: string;
}

export interface FigmaLinks {
  id: string;
  company: Company;
  url: string;
}

export interface ComponentType extends Component {
  name: string;
  description: string;
  category: string;
  usageCount: number;
  figmaLinks: FigmaLinks[];
  designSystemCount: number;
  relatedDesignSystems: { designSystem: DesignSystem }[];
  id: number;
}
