import NextAuth, { NextAuthOptions } from "next-auth"
import { Routes } from "shared/routes"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: Routes.SIGN_IN,
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      return {
        ...session,
        user: token,
      }
    },
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" },
      },
      async authorize(credentials) {
        const user = await fetch("http://localhost:2401/api/sign-in", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: credentials?.email, password: credentials?.password }),
        }).then((r) => r.json())

        if (user.error) {
          throw new Error(user.error)
        }

        return user
      },
    }),
  ],
}

export default NextAuth(authOptions)
