import prisma from '@/lib/prisma'
import Tag from '@/types/Tag'

interface Query {
  page: number
  perPage: number
}

const getTags = async ({ page, perPage }: Query): Promise<Tag[]> =>
  prisma.tag.findMany({
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

export default getTags
