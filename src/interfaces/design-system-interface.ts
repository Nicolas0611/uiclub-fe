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
  company_name: string;
  url: string;
}

export interface ComponentType extends Component {
  name: string;
  description: string;
  category: string;
  usage_count: number;
  figma_links: FigmaLinks[];
  design_systems_count: number;
  is_available?: boolean;
  related_design_systems: Pick<DesignSystem, "name" | "slug">[];
  id: number;
}
