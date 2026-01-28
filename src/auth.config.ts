import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

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

        console.log("authConfig", { email, password });
        //Find the Email

        //Compare passwords
        return null;
      },
    }),
  ],
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);
