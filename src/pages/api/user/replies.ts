import authOptions from '@/config/authOptions'
import prisma from '@/lib/prisma'
import { ReplySchema } from '@/schemas/Reply'
import Boom from '@hapi/boom'
import { NextApiHandler } from 'next'
import { getServerSession } from 'next-auth'
import { ZodError } from 'zod'

const createReply: NextApiHandler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    const { statusCode, message } = Boom.unauthorized().output.payload
    res.status(statusCode).json(message)
    return
  }

  if (!session.user?.email) {
    const { statusCode, message } = Boom.badData().output.payload
    res.status(statusCode).json(message)
    return
  }

  try {
    const { content, commentId, replyToId } = ReplySchema.parse(req.body)
    const result = await prisma.reply.create({
      data: {
        content,
        comment: {
          connect: {
            id: commentId,
          },
        },
        user: {
          connect: {
            email: session.user.email,
          },
        },
        ...(replyToId && {
          replyTo: {
            connect: {
              id: replyToId,
            },
          },
        }),
      },
    })
    res.status(200).json({ id: result.id })
  } catch (error) {
    if (error instanceof ZodError) {
      const formatted = error.format()
      const { statusCode } = Boom.badData().output.payload
      res.status(statusCode).json(formatted)

      return
    }

    throw error
  }
}

const RepliesHandler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'POST':
      return createReply(req, res)
    default: {
      const { statusCode, message } = Boom.methodNotAllowed().output.payload
      return res.status(statusCode).json(message)
    }
  }
}

export default RepliesHandler
