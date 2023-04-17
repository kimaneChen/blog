import authOptions from '@/config/authOptions'
import prisma from '@/lib/prisma'
import { UserProfileSchema } from '@/schemas/UserProfile'
import Boom from '@hapi/boom'
import { NextApiHandler } from 'next'
import { getServerSession } from 'next-auth'
import { ZodError } from 'zod'

const getProfile: NextApiHandler = async (req, res) => {
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

  const result = await prisma.user.findFirst({
    where: {
      email: {
        equals: session.user.email,
      },
    },
    select: {
      id: true,
      name: true,
      occupation: true,
      image: true,
      selfIntroduction: true,
      linkedInLink: true,
      gitHubLink: true,
    },
  })

  res.status(200).json(result)
}

const updateProfile: NextApiHandler = async (req, res) => {
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

  try {
    const { name, occupation, selfIntroduction, gitHubLink, linkedInLink } =
      UserProfileSchema.parse(req.body)

    await prisma.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        name,
        occupation,
        selfIntroduction,
        gitHubLink,
        linkedInLink,
      },
    })

    res.status(204).end()
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

const ProfileHandler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      return getProfile(req, res)
    case 'PATCH':
      return updateProfile(req, res)
    default: {
      const { statusCode, message } = Boom.methodNotAllowed().output.payload
      return res.status(statusCode).json(message)
    }
  }
}

export default ProfileHandler
