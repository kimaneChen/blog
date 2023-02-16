import { NextApiHandler } from 'next'
import prisma from '@/lib/prisma'
import Boom from '@hapi/boom'

const checkExistingEmail: NextApiHandler = async (req, res) => {
  const { email } = req.body

  const result = await prisma.user.count({
    where: {
      email: email.trim().toLowerCase(),
    },
  })

  if (result > 0) {
    const { statusCode, message } = Boom.conflict().output.payload
    return res.status(statusCode).json(message)
  }
  return res.status(200).end()
}

const UserHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    return checkExistingEmail(req, res)
  }

  const { statusCode, message } = Boom.methodNotAllowed().output.payload

  return res.status(statusCode).json(message)
}

export default UserHandler
