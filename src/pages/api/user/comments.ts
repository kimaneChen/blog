import authOptions from '@/config/authOptions'
import prisma from '@/lib/prisma'
import { CommentSchema } from '@/schemas/Comment'
import Boom from '@hapi/boom'
import { NextApiHandler } from 'next'
import { getServerSession } from 'next-auth/next'
import { ZodError } from 'zod'

const createComment: NextApiHandler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    const { statusCode, message } = Boom.unauthorized().output.payload
    res.status(statusCode).json(message)

    return
  }

  if (!session?.user?.email) {
    const { statusCode, message } = Boom.badData().output.payload
    res.status(statusCode).json(message)

    return
  }

  try {
    const { content, blogId } = CommentSchema.parse(req.body)
    const result = await prisma.comment.create({
      data: {
        content,
        blog: {
          connect: {
            id: blogId,
          },
        },
        user: {
          connect: {
            email: session.user.email,
          },
        },
      },
    })

    res.status(200).json({
      id: result.id,
    })
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

const CommentsHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    await createComment(req, res)
  }
}

export default CommentsHandler
