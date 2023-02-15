import prisma from '@/lib/prisma'
import Boom from '@hapi/boom'
import { NextApiHandler } from 'next'

const publishBlog: NextApiHandler = async (req, res) => {
  const { blogId } = req.query

  const result = await prisma.blog.update({
    where: {
      id: blogId as string,
    },
    data: {
      unpublishedAt: null,
    },
  })

  return res.status(200).json({
    id: result.id,
  })
}

const deleteBlog: NextApiHandler = async (req, res) => {
  const blogId = req.query.blogId as string

  const blog = await prisma.blog.findUnique({
    where: {
      id: blogId,
    },
  })

  if (!blog) {
    const { statusCode, message } = Boom.notFound().output.payload

    return res.status(statusCode).json(message)
  }

  if (!blog.unpublishedAt) {
    const result = await prisma.blog.update({
      where: {
        id: blogId,
      },
      data: {
        unpublishedAt: new Date(),
      },
    })

    return res.status(200).json({
      id: result.id,
    })
  }

  const result = await prisma.blog.delete({
    where: {
      id: blogId,
    },
  })

  return res.status(200).json({
    id: result.id,
  })
}

const BlogsHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'DELETE') {
    return deleteBlog(req, res)
  }

  if (req.method === 'POST') {
    return publishBlog(req, res)
  }

  const { statusCode, message } = Boom.methodNotAllowed().output.payload

  return res.status(statusCode).json(message)
}

export default BlogsHandler
