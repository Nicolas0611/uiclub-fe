import bcryptjs from "bcryptjs";
import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { prisma } from "./lib/prisma";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
  },
  /* callbacks: {
      jwt({ token, user }) {
      if (user) {
        token.data = user;
      }
      return token;
    }, 
   session({ session, token, user }) {
      session.user = token.data as unkown;
      return session;
    },
  },*/
  providers: [
    Credentials({
      /* Authorize function always needs to return something, the CredentialsProvider is the provider 
        that uses email and password only generaly it first validates with zod and then move on either
        if it finds the user or don't find anything*/
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;

        //Find the Email
        const user = await prisma.user.findUnique({
          where: { email: email.toLowerCase() },
        });
        if (!user) return null;

        //Find the Email
        if (!bcryptjs.compareSync(password, user.password)) return null;

        const { password: _, ...userWithoutPassword } = user;

        return userWithoutPassword;
      },
    }),
  ],
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
