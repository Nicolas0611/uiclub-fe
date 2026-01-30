import { Prisma } from "@prisma/client";

export type IDesignSystemFindMany = Prisma.DesignSystemFindManyArgs;
export type IComponentTypeFindMany = Prisma.ComponentTypeFindFirstArgs;
export type IDesignSystemFindFirst = Prisma.DesignSystemFindFirstArgs;
export type IComponentFindMany = Prisma.ComponentFindManyArgs;
export type IUserFindUnique = Prisma.UserFindUniqueArgs;
export type IModelNames = Prisma.ModelName;
export type ICompanyFindMany = Prisma.CompanyFindManyArgs;

export interface HttpsReq<RES_T, OPT_T> {
  findMany(options?: OPT_T): Promise<RES_T>;
  findFirst(options?: OPT_T): Promise<RES_T>;
  findUnique(options?: OPT_T): Promise<RES_T>;
}
