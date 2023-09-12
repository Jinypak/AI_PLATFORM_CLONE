import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/db";

export const autoOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  callbacks: {},
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
};
