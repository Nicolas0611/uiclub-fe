import {
  CompanyImage,
  DesignSystem,
  FigmaLinks,
} from "./design-system-interface";

export interface Company {
  id: number;
  dateCreated: Date;
  state: boolean;
  name: string;
  designSystem: DesignSystem;
  figma: FigmaLinks[];
  companyImage: CompanyImage;
}
