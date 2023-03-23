import authOptions from '@/config/authOptions'
import prisma from '@/lib/prisma'
import Boom from '@hapi/boom'
import { NextApiHandler } from 'next'
import { getServerSession } from 'next-auth/next'
import { ZodError } from 'zod'

const getNotifications: NextApiHandler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions)

  const readAt = req.query.readAt === '' ? null : req.query.readAt

  if (!session) {
    const { statusCode, message } = Boom.unauthorized().output.payload
    res.status(statusCode).json(message)

    return
  }

  const result = await prisma.commentNotification.findFirst({
    where: {
      user: {
        email: {
          equals: session.user?.email,
        },
      },
      readAt: readAt as string,
    },
    select: {
      id: true,
    },
  })

  res.status(200).json(result)
}

const updateNotifications: NextApiHandler = async (req, res) => {
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
    const { readAt } = req.body
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
        readAt,
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

const NotificationsHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    await getNotifications(req, res)
  }
  if (req.method === 'PATCH') {
    await updateNotifications(req, res)
  }
}

export default NotificationsHandler
