import authOptions from '@/config/authOptions'
import prisma from '@/lib/prisma'
import { ReplyNotificationSchema } from '@/schemas/ReplyNotification'
import Boom from '@hapi/boom'
import { NextApiHandler } from 'next'
import { getServerSession } from 'next-auth'
import { ZodError } from 'zod'

const getReplyNotifications: NextApiHandler = async (req, res) => {
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
    const page = Number(req.query.page) || 1
    const perPage = Number(req.query.perPage) || 30
    const readAt = req.query.readAt === '' ? null : req.query.readAt

    const result = await prisma.replyNotification.findMany({
      where: {
        user: {
          email: session.user.email,
        },
        readAt: readAt as string,
      },
      select: {
        id: true,
      },
      take: perPage,
      skip: (page - 1) * perPage,
    })

    res.status(200).json(result)
  } catch (error) {
    if (error instanceof ZodError) {
      const message = error.format()
      const { statusCode } = Boom.badData().output.payload
      res.status(statusCode).json(message)

      return
    }

    throw error
  }
}

const updateReplyNotifications: NextApiHandler = async (req, res) => {
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
    const { readAt } = ReplyNotificationSchema.parse(req.body)

    await prisma.replyNotification.updateMany({
      where: {
        user: {
          email: session.user.email,
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
      const message = error.format()
      const { statusCode } = Boom.badData().output.payload
      res.status(statusCode).json(message)

      return
    }

    throw error
  }
}

const replyNotifications: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      return getReplyNotifications(req, res)
    case 'PATCH':
      return updateReplyNotifications(req, res)
    default: {
      const { statusCode, message } = Boom.methodNotAllowed().output.payload
      return res.status(statusCode).json(message)
    }
  }
}

export default replyNotifications
