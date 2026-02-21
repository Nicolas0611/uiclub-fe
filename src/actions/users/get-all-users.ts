"use server";

import { PrismaAdapter } from "@/adapters/PrismaAdapter";
import { auth } from "@/auth.config";
import { IUserFindMany } from "@/interfaces/adapters/prisma-adapter-interface";
import { User } from "@/interfaces/user-interface";

export const getAllUsers = async () => {
  const session = await auth();
  const isAdmin = session?.user?.role === "admin";
  if (!isAdmin) {
    return {
      ok: false,
      message: "No tienes permisos para acceder a esta página",
    };
  }

  try {
    const req = new PrismaAdapter<User[], IUserFindMany>("User");
    const users = await req.findMany();
    return {
      ok: true,
      users,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "No se pudo obtener los usuarios",
    };
  }
};
