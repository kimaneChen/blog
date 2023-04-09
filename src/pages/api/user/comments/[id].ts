import authOptions from '@/config/authOptions'
import prisma from '@/lib/prisma'
import Boom from '@hapi/boom'
import { NextApiHandler } from 'next'
import { getServerSession } from 'next-auth'

const deleteComment: NextApiHandler = async (req, res) => {
  const session = await getServerSession(req, res, authOptions)
  if (!session) {
    const { statusCode, message } = Boom.unauthorized().output.payload
    res.status(statusCode).json(message)
    return
  }
  const { id } = req.query
  const comment = await prisma.comment.findUnique({
    where: {
      id: String(id),
    },
    include: {
      user: {
        select: {
          email: true,
        },
      },
    },
  })

  if (!comment) {
    const { statusCode, message } = Boom.notFound().output.payload
    res.status(statusCode).json(message)
  }

  if (!session.user?.email || session.user.email !== comment?.user.email) {
    const { statusCode, message } = Boom.badData().output.payload
    res.status(statusCode).json(message)
  }

  const result = await prisma.comment.delete({
    where: {
      id: String(id),
    },
  })

  res.status(200).json({
    id: result.id,
  })
}

const CommentHandler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'DELETE':
      return deleteComment(req, res)

    default: {
      const { statusCode, message } = Boom.methodNotAllowed().output.payload
      return res.status(statusCode).json(message)
    }
  }
}

export default CommentHandler
