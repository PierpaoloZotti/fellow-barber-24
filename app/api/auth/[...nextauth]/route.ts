import { db } from "@/lib/prisma";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";

const handler = NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
});

export { handler as GET, handler as POST };
