export interface DesignSystem {
  id: number;
  description: string;
  company_name: string;
  components: Component[];
  name: string;
  version: string;
  quantity_components: number;
  popularity: Popularity;
  is_updated: boolean;
}

export type Popularity = "Medium" | "High" | "Low";

export interface Component {
  name: string;
  description: string;
  type: string;
  company_name: string;
}
