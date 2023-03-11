import authOptions from '@/config/authOptions'
import prisma from '@/lib/prisma'
import Boom from '@hapi/boom'
import { NextApiHandler } from 'next'
import { getServerSession } from 'next-auth/next'

const getBlogsWithComments: NextApiHandler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    const { statusCode, message } = Boom.unauthorized().output.payload
    res.status(statusCode).json(message)

    return
  }

  const page = Number(req.query.page) || 1
  const perPage = Number(req.query.perPage) || 3

  const comments = await prisma.comment.findMany({
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

  const blogs = comments.map((comment) => comment.blog)
  res.status(200).json(blogs)
}

const UserBlogsWithCommentsHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    await getBlogsWithComments(req, res)
  }
}

export default UserBlogsWithCommentsHandler
