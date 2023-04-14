import authOptions from '@/config/authOptions'
import prisma from '@/lib/prisma'
import { CommentNotificationSchema } from '@/schemas/CommentNotification'
import Boom from '@hapi/boom'
import { NextApiHandler } from 'next'
import { getServerSession } from 'next-auth/next'
import { ZodError } from 'zod'

const getCommentNotifications: NextApiHandler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    const { statusCode, message } = Boom.unauthorized().output.payload
    res.status(statusCode).json(message)

    return
  }

  const page = Number(req.query.page) || 1
  const perPage = Number(req.query.perPage) || 10
  const readAt = req.query.readAt === '' ? null : req.query.readAt

  const result = await prisma.commentNotification.findMany({
    where: {
      user: {
        email: {
          equals: session.user?.email,
        },
      },
      readAt: readAt as string,
    },
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      comment: {
        include: {
          blog: {
            select: {
              id: true,
              title: true,
            },
          },
          user: {
            select: {
              id: true,
              name: true,
              image: true,
              email: true,
            },
          },
        },
      },
    },
    take: perPage,
    skip: (page - 1) * perPage,
  })

  res.status(200).json(result)
}

const updateCommentNotifications: NextApiHandler = async (req, res) => {
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
    const { readAt } = CommentNotificationSchema.parse(req.body)

    await prisma.commentNotification.updateMany({
      where: {
        user: {
          email: {
            equals: session.user.email,
          },
        },
        readAt: null,
      },
      data: {
        readAt: new Date(readAt),
      },
    })

    res.status(204).end()
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

const CommentNotificationHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    await getCommentNotifications(req, res)
  }
  if (req.method === 'PATCH') {
    await updateCommentNotifications(req, res)
  }
}

export default CommentNotificationHandler
