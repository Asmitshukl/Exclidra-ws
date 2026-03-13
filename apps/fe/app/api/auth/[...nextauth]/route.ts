import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/signin",   // your existing login page
    signOut:"/"
  },
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60,
  },
});

export { handler as GET, handler as POST };