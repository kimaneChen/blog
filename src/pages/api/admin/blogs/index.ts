import { NextApiHandler } from 'next'
import prisma from '@/lib/prisma'
import Boom from '@hapi/boom'
import { BlogSchema } from '@/schemas/Blog'

const getBlogs: NextApiHandler = async (req, res) => {
  const page = Number(req.query.page) || 1
  const perPage = Number(req.query.perPage) || 3

  const result = await prisma.blog.findMany({
    orderBy: {
      createdAt: 'desc',
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

const createBlog: NextApiHandler = async (req, res) => {
  const { blog, userEmail } = req.body

  const { title, description, tags } = BlogSchema.parse(blog)

  if (!userEmail) {
    const { statusCode, message } = Boom.badRequest().output.payload

    return res.status(statusCode).json(message)
  }

  const result = await prisma.blog.create({
    data: {
      title,
      description,
      user: {
        connect: {
          email: userEmail,
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

  return res.status(200).json({
    id: result.id,
  })
}

const BlogsHandler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      return getBlogs(req, res)
    case 'POST':
      return createBlog(req, res)
    default: {
      const { statusCode, message } = Boom.methodNotAllowed().output.payload

      return res.status(statusCode).json(message)
    }
  }
}

export default BlogsHandler
