import { Prisma } from "@prisma/client";

//TODO:CREATE A INTERFACE FOR THE ADAPTER

export type IDesignSystemFindMany = Prisma.DesignSystemFindManyArgs;
export type IDesignSystemFindFirst = Prisma.DesignSystemFindFirstArgs;
export type IComponentFindMany = Prisma.ComponentFindManyArgs;

export type IModelNames = Prisma.ModelName; // This will be a union of all your model names (e.g., 'User' | 'Product' | 'Order')

export interface HttpsReq<RES_T, OPT_T> {
  findMany(options?: OPT_T): Promise<RES_T>;
}
