import prisma from '@/lib/prisma'
import Blog from '@/types/Blog'

interface Query {
  page: number
  perPage: number
  tags?: string[]
  userId?: string
  exclude?: string
  search?: string
}

const getBlogs = ({ page, perPage, userId, exclude, tags, search }: Query): Promise<Blog[]> =>
  prisma.blog
    .findMany({
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        userId: true,
        title: true,
        description: true,
        unpublishedAt: true,
        content: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
            occupation: true,
          },
        },
        tags: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        NOT: {
          id: {
            in: exclude,
          },
        },
        userId,
        unpublishedAt: null,
        tags: {
          some: {
            name: {
              in: tags,
            },
          },
        },
        ...(search && {
          OR: [
            {
              title: {
                contains: search,
                mode: 'insensitive',
              },
            },
            {
              description: {
                contains: search,
                mode: 'insensitive',
              },
            },
            {
              tags: {
                some: {
                  name: {
                    contains: search,
                    mode: 'insensitive',
                  },
                },
              },
            },
          ],
        }),
      },
      take: perPage,
      skip: (page - 1) * perPage,
    })
    .then((blogs) =>
      blogs.map((blog) => ({
        ...blog,
        createdAt: blog.createdAt.toISOString(),
        updatedAt: blog.updatedAt.toISOString(),
        unpublishedAt: blog.unpublishedAt?.toISOString() || null,
      }))
    )

export default getBlogs
