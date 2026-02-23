import { Prisma } from "@prisma/client";

/* DESIGN SYSTEM */
export type IDesignSystemFindMany = Prisma.DesignSystemFindManyArgs;
export type IDesignSystemFindFirst = Prisma.DesignSystemFindFirstArgs;

/* COMPONENT TYPE */
export type IComponentTypeFindMany = Prisma.ComponentTypeFindFirstArgs;

/* COMPONENT */
export type IComponentFindMany = Prisma.ComponentFindManyArgs;
export type IComponentCount = Prisma.ComponentCountArgs;
export type IComponentFindFirst = Prisma.ComponentFindFirstArgs;
export type IComponentImageDelete = Prisma.ComponentImageDeleteArgs;

/* USER */
export type IUserFindUnique = Prisma.UserFindUniqueArgs;
export type IUserFindMany = Prisma.UserFindManyArgs;
export type IUserUpdate = Prisma.UserUpdateArgs;

/* COMPANY */
export type ICompanyFindMany = Prisma.CompanyFindManyArgs;
export type ICompanyFindFirst = Prisma.CompanyFindFirstArgs;
export type ICompanyImageDelete = Prisma.CompanyImageDeleteArgs;
export type ICompanyImageFindMany = Prisma.CompanyImageFindManyArgs;

/* LINK */
export type ILinkFindMany = Prisma.LinkFindManyArgs;
export type ILinkFindFirst = Prisma.LinkFindFirstArgs;

/* MODEL NAMES */
export type IModelNames = Prisma.ModelName;

export interface HttpsReq<RES_T, OPT_T> {
  findMany(options?: OPT_T): Promise<RES_T>;
  findFirst(options?: OPT_T): Promise<RES_T>;
  findUnique(options?: OPT_T): Promise<RES_T>;
  delete(options?: OPT_T): Promise<RES_T>;
  count(options?: OPT_T): Promise<number>;
  update(options?: OPT_T): Promise<RES_T>;
}
