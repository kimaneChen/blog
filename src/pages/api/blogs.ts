import getBlogs from '@/services/getBlogs'
import Boom from '@hapi/boom'
import { NextApiRequest, NextApiResponse } from 'next'

const get = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const result = await getBlogs({
    page: Number(req.query.page) || 1,
    perPage: Number(req.query.perPage) || 10,
    userId: req.query.userId as string,
    exclude: req.query.exclude as string,
    tags: req.query.tags as string[],
    search: req.query.search as string,
  })

  res.status(200).json(result)
}

const BlogsHandler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  switch (req.method) {
    case 'GET':
      await get(req, res)
      break
    default: {
      const { statusCode, message } = Boom.methodNotAllowed().output.payload
      res.status(statusCode).json({ message })
    }
  }
}

export default BlogsHandler
