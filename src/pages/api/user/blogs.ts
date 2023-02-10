import authOptions from '@/config/authOptions'
import prisma from '@/lib/prisma'
import { BlogSchema } from '@/schemas/Blog'
import Boom from '@hapi/boom'
import { NextApiHandler } from 'next'
import { getServerSession } from 'next-auth/next'
import { ZodError } from 'zod'

const createBlog: NextApiHandler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    const { statusCode, message } = Boom.unauthorized().output.payload
    res.status(statusCode).json(message)

    return
  }

  if (!session?.user?.email) {
    const { statusCode, message } = Boom.badData().output.payload
    res.status(statusCode).json(message)

    return
  }

  try {
    const { title, description, tags } = BlogSchema.parse(req.body)

    const result = await prisma.blog.create({
      data: {
        title,
        description,
        user: {
          connect: {
            email: session.user?.email,
          },
        },
        tags: {
          connectOrCreate: tags.map((tag) => ({
            where: {
              name: tag,
            },
            create: {
              name: tag,
            },
          })),
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

const getBlogs: NextApiHandler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    const { statusCode, message } = Boom.unauthorized().output.payload
    res.status(statusCode).json(message)

    return
  }

  const page = Number(req.query.page) || 1
  const perPage = Number(req.query.perPage) || 3

  const blogs = await prisma.blog.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      user: {
        email: {
          equals: session.user?.email,
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
  res.status(200).json(blogs)
}

const UserBlogsHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    await createBlog(req, res)
  }
  if (req.method === 'GET') {
    await getBlogs(req, res)
  }
}

export default UserBlogsHandler
