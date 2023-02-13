import { NextApiHandler } from 'next'
import prisma from '@/lib/prisma'
import Boom from '@hapi/boom'
import { UserSchema } from '@/schemas/User'

const getAdminUsers: NextApiHandler = async (req, res) => {
  const role = req.query.role as string

  const result = await prisma.user.findMany({
    where: {
      role,
    },
  })

  res.status(200).json(result)
}

const createAdminUser: NextApiHandler = async (req, res) => {
  const { email, name, image, role } = UserSchema.parse(req.body)

  const result = await prisma.user.create({
    data: {
      name,
      image,
      email,
      role,
    },
  })

  res.status(200).json({
    id: result.id,
  })
}

const AdminUsersHandler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    return getAdminUsers(req, res)
  }

  if (req.method === 'POST') {
    return createAdminUser(req, res)
  }

  const { statusCode, message } = Boom.methodNotAllowed().output.payload

  return res.status(statusCode).json(message)
}

export default AdminUsersHandler
