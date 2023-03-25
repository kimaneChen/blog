import prisma from '@/lib/prisma'
import Boom from '@hapi/boom'
import { NextApiHandler } from 'next'

const getReplies: NextApiHandler = async (req, res) => {
  const page = Number(req.query.page) || 1
  const perPage = Number(req.query.perPage) || 5
  const { id } = req.query
  const result = await prisma.reply.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      commentId: String(id),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
      replyTo: {
        select: {
          id: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
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

const RepliesHandler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      return getReplies(req, res)
    default: {
      const { statusCode, message } = Boom.methodNotAllowed().output.payload
      return res.status(statusCode).json(message)
    }
  }
}

export default RepliesHandler
