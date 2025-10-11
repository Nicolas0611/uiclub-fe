export interface Company {
  id: number;
  name: string;
}

export type Popularity = "MEDIUM" | "HIGH" | "LOW";

export interface DesignSystem {
  id: number;
  shortDescription: string;
  largeDescription: string;
  company: Company;
  components: ComponentType[];
  name: string;
  popularity: Popularity;
  isUpdated: boolean;
  companyImage: {
    url: string;
  };
  slug: string;
  links?: {
    web: string;
    storybook: string;
    figma: string;
  };
  _count: { components: 26 };
  isNew: boolean;
}

export interface Component {
  name: string;
  description: string;
  type: string;
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
