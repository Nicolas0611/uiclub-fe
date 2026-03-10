import bcryptjs from "bcryptjs";
import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { PrismaAdapter } from "./adapters/PrismaAdapter/PrismaAdapter";
import { IUserFindUnique } from "./interfaces/adapters/prisma-adapter-interface";
import { User } from "./interfaces/user-interface";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    jwt({ token, user }) {
      /* If the user is found, the token data is the user object that comes from the jwt callback*/
      if (user) {
        token.data = user;
      }
      return token;
    },
    session({ session, token }) {
      /* Token data is the user object */
      session.user = token.data as never;
      return session;
    },
  },
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
        const userReq = new PrismaAdapter<User, IUserFindUnique>("User");
        const user = await userReq.findUnique({
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
