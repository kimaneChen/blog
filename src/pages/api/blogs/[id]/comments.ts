import prisma from '@/lib/prisma'
import { NextApiHandler } from 'next'

const getComments: NextApiHandler = async (req, res) => {
  const page = Number(req.query.page) || 1
  const perPage = Number(req.query.perPage) || 3
  const { id } = req.query
  const comments = await prisma.comment.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      blogId: String(id),
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
    },
    take: perPage,
    skip: (page - 1) * perPage,
  })
  res.status(200).json(comments)
}

const CommentsHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    await getComments(req, res)
  }
}

export default CommentsHandler
