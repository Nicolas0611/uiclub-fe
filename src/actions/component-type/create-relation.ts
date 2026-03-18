"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter/PrismaAdapter";
import { FormRelationData } from "@/app/dashboard/component-type/ui/RelationModal/RelationModal";
import { IDesignSystemComponentTypeCreate } from "@/interfaces/adapters/prisma-adapter-interface";
import { DesignSystemComponentType } from "@prisma/client";

export const createRelation = async (data: FormRelationData) => {
  try {
    const req = new PrismaAdapter<
      DesignSystemComponentType,
      IDesignSystemComponentTypeCreate
    >("DesignSystemComponentType");

    const reponse = await req.create({
      data: {
        componentTypeId: data.componentTypeId,
        designSystemId: data.designSystemId,
      },
    });

    if (!reponse) {
      return {
        ok: false,
        message: "Error al crear la relación",
      };
    }
    return {
      ok: true,
      message: "Relación creada exitosamente",
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: "Error al crear la relación",
    };
  }
};
