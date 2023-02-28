import { NextApiHandler } from 'next'
import Boom from '@hapi/boom'
import getTags from '@/services/getTags'

const get: NextApiHandler = async (req, res) => {
  const page = Number(req.query.page) || 1
  const perPage = Number(req.query.perPage) || 10

  const result = await getTags({
    page,
    perPage,
  })

  return res.status(200).json(result)
}

const TagsHandler: NextApiHandler = async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      return get(req, res)
    default: {
      const { statusCode, message } = Boom.methodNotAllowed().output.payload
      return res.status(statusCode).json(message)
    }
  }
}

export default TagsHandler
