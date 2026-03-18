import {
  HttpsReq,
  IModelNames,
} from "@/interfaces/adapters/prisma-adapter-interface";
import { prisma } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client/extension";

export class PrismaAdapter<RES_T, OPT_T> implements HttpsReq<RES_T, OPT_T> {
  private prisma: PrismaClient = prisma;
  private modelName: IModelNames;
  constructor(modelName: IModelNames) {
    this.modelName = modelName;
  }

  private get model() {
    return this.prisma[this.modelName];
  }

  findMany(options?: OPT_T): Promise<RES_T> {
    return this.model.findMany(options);
  }
  findFirst(options?: OPT_T): Promise<RES_T> {
    return this.model.findFirst(options);
  }
  findUnique(options?: OPT_T): Promise<RES_T> {
    return this.model.findUnique(options);
  }
  delete(options?: OPT_T): Promise<RES_T> {
    return this.model.delete(options);
  }
  count(options?: OPT_T): Promise<number> {
    return this.model.count(options);
  }
  update(options?: OPT_T): Promise<RES_T> {
    return this.model.update(options);
  }
  create(options?: OPT_T): Promise<RES_T> {
    return this.model.create(options);
  }
}
