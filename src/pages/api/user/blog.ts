import { NextApiHandler } from 'next'
import prisma from '@/lib/prisma'
import { getToken } from 'next-auth/jwt'

const createBlog: NextApiHandler = async (req, res) => {
  const token = await getToken({ req })

  if (!token) {
    res.status(401).end()

    return
  }

  if (!token.email) {
    // TODO: Handle token email is not found
    // TODO: BOOM
    // https://www.npmjs.com/package/@hapi/boom
    res.status(400).end()

    return
  }

  //
  const { title, description } = req.body
  // TODO: Request body check
  // https://github.com/colinhacks/zod

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
}

export default createBlog
