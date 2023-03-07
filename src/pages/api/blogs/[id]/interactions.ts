import prisma from '@/lib/prisma'
import { NextApiHandler } from 'next'

const LIMIT = 10

const getCommentsUsers: NextApiHandler = async (req, res) => {
  const { id } = req.query
  const take = Number(req.query.take) || LIMIT
  const comments = await prisma.comment.findMany({
    select: {
      user: {
        select: {
          id: true,
          email: true,
          image: true,
          name: true,
        },
      },
    },
    distinct: ['userId'],
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      blogId: String(id),
    },
    take,
  })
  res.status(200).json(comments)
}

const UsersHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    await getCommentsUsers(req, res)
  }
}

export default UsersHandler
