import { SuggestedTagsSchema } from '@/schemas/SuggestedTags'
import Boom from '@hapi/boom'
import { NextApiHandler } from 'next'
import { ZodError } from 'zod'
import prisma from '@/lib/prisma'

const getSuggestedTags: NextApiHandler = async (req, res) => {
  try {
    const { search } = SuggestedTagsSchema.parse(req.query)

    const tags = await prisma.tag.findMany({
      where: {
        name: {
          contains: search,
          mode: 'insensitive',
        },
      },
    })

    res.status(200).json(tags)
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

export default getSuggestedTags
