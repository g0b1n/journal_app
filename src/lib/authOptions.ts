// src/lib/authOptions.ts
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";


export const authOptions: NextAuthOptions = {
  // Configure authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        // Find user by email from the Prisma database
        const user = await prisma.user.findUnique({
          where: { username: credentials.username },
        });

        // If user exists and password matches, return user data
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return { id: user.id, username: user.username ?? "", email: user.email };
        }

        return null;
      },
    }),
  ],

  // Secret for signing the JWT
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/auth/signin",
  },

  callbacks: {
    async jwt({ token, user }) {
        if (user) {
            token.id = user.id;
            token.email = user.email;
            token.username = user.username;
        }
        return token;
    },

    async session({ session, token }) {
        if (token) {
            session.user.id = token.id as string;
            session.user.email = token.email as string;
            session.user.username = token.username as string;
        }
        return session;
    }
  }
};
