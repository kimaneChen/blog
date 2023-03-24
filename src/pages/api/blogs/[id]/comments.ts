import prisma from '@/lib/prisma'
import { NextApiHandler } from 'next'

const getComments: NextApiHandler = async (req, res) => {
  const page = Number(req.query.page) || 1
  const perPage = Number(req.query.perPage) || 3
  const { id } = req.query
  const result = await prisma.comment.findMany({
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
      _count: {
        select: { replies: true },
      },
    },
    take: perPage,
    skip: (page - 1) * perPage,
  })
  const comments = result.map((comment) => {
    const { _count: count, ...rest } = comment
    return {
      ...rest,
      replyNumber: count.replies,
    }
  })

  res.status(200).json(comments)
}

const CommentsHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    await getComments(req, res)
  }
}

export default CommentsHandler
