"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter/PrismaAdapter";
import { auth } from "@/auth.config";
import { IUserUpdate } from "@/interfaces/adapters/prisma-adapter-interface";
import { User } from "@/interfaces/user-interface";
import { revalidatePath } from "next/cache";

//missin zod validation

export const editUser = async (user: User) => {
  const session = await auth();
  const isAdmin = session?.user?.role === "admin";
  if (!isAdmin) {
    return {
      ok: false,
      message: "No tienes permisos para acceder a esta página",
    };
  }

  try {
    const req = new PrismaAdapter<User, IUserUpdate>("User");
    const result = await req.update({
      where: { id: user.id },
      data: user,
    });
    if (!result) {
      return {
        ok: false,
        message: "Usuario no encontrado",
      };
    }
    revalidatePath("/dashboard/users");

    return {
      ok: true,
      message: "Usuario editado correctamente",
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      message: "Error al editar el usuario",
    };
  }
};
