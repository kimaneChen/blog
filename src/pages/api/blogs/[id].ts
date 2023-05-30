import prisma from '@/lib/prisma'
import Boom from '@hapi/boom'
import { NextApiHandler } from 'next'
import { ZodError } from 'zod'

const getBlog: NextApiHandler = async (req, res) => {
  try {
    const { id } = req.query
    if (!id) {
      const { statusCode, message } = Boom.notFound().output.payload
      return res.status(statusCode).json(message)
    }
    const blog = await prisma.blog.findUnique({
      where: {
        id: id as string,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
            occupation: true,
          },
        },
        tags: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })
    return res.status(200).json(blog)
  } catch (error) {
    if (error instanceof ZodError) {
      const formatted = error.format()
      const { statusCode } = Boom.badData().output.payload
      return res.status(statusCode).json(formatted)
    }
    throw error
  }
}

const increaseViews: NextApiHandler = async (req, res) => {
  const { id } = req.query

  const result = await prisma.blog.update({
    where: {
      id: id as string,
    },
    data: {
      views: {
        increment: 1,
      },
    },
  })

  return res.status(200).json({
    id: result.id,
  })
}

const BlogHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    await getBlog(req, res)
  }

  if (req.method === 'PATCH') {
    await increaseViews(req, res)
  }
}

export default BlogHandler
