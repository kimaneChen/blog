import prisma from '@/lib/prisma'
import { BlogSchema } from '@/schemas/Blog'
import Boom from '@hapi/boom'
import { NextApiHandler } from 'next'
import { getToken } from 'next-auth/jwt'
import { ZodError } from 'zod'

const createBlog: NextApiHandler = async (req, res) => {
  const token = await getToken({ req })

  if (!token) {
    const { statusCode, message } = Boom.unauthorized().output.payload
    res.status(statusCode).send(message)

    return
  }

  if (!token.email) {
    const { statusCode, message } = Boom.badData().output.payload
    res.status(statusCode).send(message)

    return
  }

  try {
    const { title, description } = BlogSchema.parse(req.body)

    const result = await prisma.blog.create({
      data: {
        title,
        description,
        user: {
          connect: {
            email: token.email,
          },
        },
      },
    })

    res.status(200).send({
      id: result.id,
    })
  } catch (error) {
    if (error instanceof ZodError) {
      const formatted = error.format()
      const { statusCode } = Boom.badData().output.payload
      res.status(statusCode).send(formatted)

      return
    }

    throw error
  }
}

export default createBlog
