import { NextApiHandler } from 'next'
import Boom from '@hapi/boom'
import prisma from '@/lib/prisma'

const getTags: NextApiHandler = async (req, res) => {
  const page = Number(req.query.page) || 1
  const perPage = Number(req.query.perPage) || 10

  const result = await prisma.tag.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      Blog: {
        _count: 'desc',
      },
    },
    take: perPage,
    skip: (page - 1) * perPage,
  })

  return res.status(200).json(result)
}

const TagsHandler: NextApiHandler = async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      return getTags(req, res)
    default: {
      const { statusCode, message } = Boom.methodNotAllowed().output.payload
      return res.status(statusCode).json(message)
    }
  }
}

export default TagsHandler
