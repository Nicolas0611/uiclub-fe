"use server";

import { signIn } from "@/auth.config";
import { AuthError } from "next-auth";

export const login = async (email: string, password: string) => {
  try {
    const user = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return { ok: true, user, message: "Inicio de sesión exitoso" };
  } catch (error) {
    console.error(error);
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return { ok: false, message: "Credenciales inválidas" };
      }
    }
    return { ok: false, message: "Error inesperado" };
  }
};
