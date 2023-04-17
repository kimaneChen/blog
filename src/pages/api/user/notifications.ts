import authOptions from '@/config/authOptions'
import prisma from '@/lib/prisma'
import Boom from '@hapi/boom'
import { ZodError } from 'zod'
import { NotificationSchema } from '@/schemas/Notification'
import { NextApiHandler } from 'next'
import { getServerSession } from 'next-auth/next'

const getNotifications: NextApiHandler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    const { statusCode, message } = Boom.unauthorized().output.payload
    res.status(statusCode).json(message)

    return
  }

  const page = Number(req.query.page) || 1
  const perPage = Number(req.query.perPage) || 3

  const notifications = await prisma.notification.findMany({
    where: {
      blog: {
        user: {
          email: {
            equals: session.user?.email,
          },
        },
      },
    },
    distinct: ['blogId'],
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      blog: {
        select: {
          id: true,
          title: true,
          comments: {
            select: {
              id: true,
              content: true,
              createdAt: true,
              updatedAt: true,
              user: {
                select: {
                  name: true,
                  image: true,
                },
              },
            },
            orderBy: {
              createdAt: 'desc',
            },
          },
        },
      },
    },
    take: 5,
    skip: (page - 1) * perPage,
  })

  const notificationBlogs = notifications.map((notification) => notification.blog)
  res.status(200).json(notificationBlogs)
}

const createNotification: NextApiHandler = async (req, res) => {
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
    const { blogId } = NotificationSchema.parse(req.body)
    const result = await prisma.notification.create({
      data: {
        blog: {
          connect: {
            id: blogId,
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

const NotificationHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    await getNotifications(req, res)
  }
  if (req.method === 'POST') {
    await createNotification(req, res)
  }
}

export default NotificationHandler
