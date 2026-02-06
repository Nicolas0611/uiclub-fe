import { Prisma } from "@prisma/client";

/* DESIGN SYSTEM */
export type IDesignSystemFindMany = Prisma.DesignSystemFindManyArgs;
export type IDesignSystemFindFirst = Prisma.DesignSystemFindFirstArgs;

/* COMPONENT TYPE */
export type IComponentTypeFindMany = Prisma.ComponentTypeFindFirstArgs;
export type IComponentFindMany = Prisma.ComponentFindManyArgs;

/* USER */
export type IUserFindUnique = Prisma.UserFindUniqueArgs;

/* COMPANY */
export type ICompanyFindMany = Prisma.CompanyFindManyArgs;
export type ICompanyFindFirst = Prisma.CompanyFindFirstArgs;
export type ICompanyImageDelete = Prisma.CompanyImageDeleteArgs;
export type ICompanyImageFindMany = Prisma.CompanyImageFindManyArgs;
/* MODEL NAMES */
export type IModelNames = Prisma.ModelName;

export interface HttpsReq<RES_T, OPT_T> {
  findMany(options?: OPT_T): Promise<RES_T>;
  findFirst(options?: OPT_T): Promise<RES_T>;
  findUnique(options?: OPT_T): Promise<RES_T>;
  delete(options?: OPT_T): Promise<RES_T>;
}
