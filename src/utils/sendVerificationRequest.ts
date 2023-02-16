import { createTransport } from 'nodemailer'
import prisma from '@/lib/prisma'
import { html, text } from './verificationEmailTemplate'

const sendVerificationRequest = async ({ identifier, url, provider }: any): Promise<void> => {
  const { host } = new URL(url)

  const isExistingUser = !!(await prisma.user.count({
    where: { email: identifier.trim().toLowerCase() },
  }))

  const transport = createTransport(provider.server)
  const result = await transport.sendMail({
    to: identifier,
    from: provider.from,
    subject: isExistingUser ? `Log in to ${host}` : `Sign in to ${host}`,
    text: text({ url, host, isExistingUser }),
    html: html({ url, host, isExistingUser }),
  })
  const failed = result.rejected.concat(result.pending).filter(Boolean)
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`)
  }
}

export default sendVerificationRequest
