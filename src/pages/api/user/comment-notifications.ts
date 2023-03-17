import authOptions from '@/config/authOptions'
import prisma from '@/lib/prisma'
import Boom from '@hapi/boom'
import { NextApiHandler } from 'next'
import { getServerSession } from 'next-auth/next'

const getCommentNotifications: NextApiHandler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    const { statusCode, message } = Boom.unauthorized().output.payload
    res.status(statusCode).json(message)

    return
  }

  const page = Number(req.query.page) || 1
  const perPage = Number(req.query.perPage) || 30

  const commentNotifications = await prisma.commentNotification.findMany({
    where: {
      user: {
        email: {
          equals: session.user?.email,
        },
      },
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

  res.status(200).json(commentNotifications)
}

const CommentNotificationHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    await getCommentNotifications(req, res)
  }
}

export default CommentNotificationHandler
