import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { AuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import prisma from '@/lib/prisma'
import EmailProvider from 'next-auth/providers/email'
import { User } from '@prisma/client'

const authOptions: AuthOptions = {
  pages: {
    signIn: '/',
    verifyRequest: '/email-verification-request',
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },

      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      return {
        ...session,
        user: {
          ...user,
          role: (user as User).role,
        },
      }
    },
  },
}

export default authOptions
