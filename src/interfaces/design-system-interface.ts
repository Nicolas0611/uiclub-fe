export interface DesignSystem {
  id: number;
  short_description: string;
  large_description: string;
  company_name: string;
  components: ComponentType[];
  name: string;
  version: string;
  quantity_components: number;
  popularity: Popularity;
  is_updated: boolean;
  thumbnail_image: string;
  slug: string;
  links?: {
    web: string;
    storybook: string;
    figma: string;
  };
  is_new: boolean;
}

export type Popularity = "Medium" | "High" | "Low";

export interface Component {
  name: string;
  description: string;
  type: string;
  company_name: string;
  related_names: Array<string>;
  link_to_site: string;
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
}
