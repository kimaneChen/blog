import { NextApiHandler } from 'next'
import Boom from '@hapi/boom'
import { BlogSchema } from '@/schemas/Blog'

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
  if (req.method === 'POST') {
    return createBlog(req, res)
  }

  const { statusCode, message } = Boom.methodNotAllowed().output.payload

  return res.status(statusCode).json(message)
}

export default BlogsHandler
