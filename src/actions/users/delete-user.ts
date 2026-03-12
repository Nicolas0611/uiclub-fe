"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter/PrismaAdapter";
import { auth } from "@/auth.config";
import { IUserDelete } from "@/interfaces/adapters/prisma-adapter-interface";
import { User } from "@/interfaces/user-interface";
import { revalidatePath } from "next/cache";

export const deleteUser = async (id: string) => {
  const session = await auth();
  const isAdmin = session?.user?.role === "admin";

  if (!isAdmin) {
    return {
      ok: false,
      message: "No tienes permisos para acceder a esta página",
    };
  }

  try {
    const req = new PrismaAdapter<User[], IUserDelete>("User");
    const users = await req.delete({
      where: {
        id: id,
      },
    });
    if (!users) {
      return {
        ok: false,
        message: "No se pudo eliminar el usuario",
      };
    }
    revalidatePath("/dashboard/users");
    return {
      ok: true,
      message: "Usuario eliminado correctamente",
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "No se pudo obtener los usuarios",
    };
  }
};
