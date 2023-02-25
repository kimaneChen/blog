import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

const getBlogs = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const page = Number(req.query.page) || 1
  const perPage = Number(req.query.perPage) || 3
  const userId = req.query?.userId as string | undefined
  const exclude = req.query?.exclude as string | undefined

  const result = await prisma.blog.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      NOT: {
        id: {
          in: exclude,
        },
      },
      userId,
      unpublishedAt: null,
      tags: {
        some: {
          id: {
            in: req.query.tags,
          },
        },
      },
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
      tags: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    take: perPage,
    skip: (page - 1) * perPage,
  })

  res.status(200).json(result)
}

export default getBlogs
