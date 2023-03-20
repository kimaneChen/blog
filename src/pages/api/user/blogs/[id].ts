import authOptions from '@/config/authOptions'
import prisma from '@/lib/prisma'
import { BlogSchema } from '@/schemas/Blog'
import Boom from '@hapi/boom'
import { NextApiHandler } from 'next'
import { getServerSession } from 'next-auth/next'
import { ZodError } from 'zod'

const updateBlog: NextApiHandler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions)
  if (!session) {
    const { statusCode, message } = Boom.unauthorized().output.payload
    res.status(statusCode).json(message)

    return
  }

  if (!session.user?.email) {
    const { statusCode, message } = Boom.badData().output.payload
    res.status(statusCode).json(message)

    return
  }

  const { id } = req.query
  if (!id) {
    const { statusCode, message } = Boom.notFound().output.payload
    res.status(statusCode).json(message)

    return
  }
  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: String(id),
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
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

    const { title, description, tags, content } = BlogSchema.parse(req.body)
    if (!blog || blog.user.email !== session.user.email) {
      const { statusCode, message } = Boom.unauthorized().output.payload
      res.status(statusCode).json(message)

      return
    }
    const result = await prisma.blog.update({
      where: {
        id: String(id),
      },
      data: {
        title,
        description,
        content,
        tags: {
          disconnect: blog.tags.map((tag) => ({ id: tag.id })),
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

const UserBlogsHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'PUT') {
    await updateBlog(req, res)
  }
}

export default UserBlogsHandler
