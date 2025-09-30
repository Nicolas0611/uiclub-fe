import {
  HttpsReq,
  IModelNames,
} from "@/interfaces/adapters/prisma-adapter-interface";
import { PrismaClient } from "@prisma/client/extension";

export class PrismaAdapter<RES_T, OPT_T> implements HttpsReq<RES_T, OPT_T> {
  private prisma: PrismaClient;
  private modelName: IModelNames;
  constructor(prisma: PrismaClient, modelName: IModelNames) {
    this.prisma = prisma;
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
}
