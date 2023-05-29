import { Blog as PrismaBlog, User as PrismaUser, Tag as PrismaTag } from '@prisma/client'

interface Blog extends Pick<PrismaBlog, 'id' | 'title' | 'description'> {
  createdAt: string
  updatedAt: string
  unpublishedAt: string | null
  content: any
  user?: Pick<PrismaUser, 'id' | 'name' | 'email' | 'image' | 'occupation'>
  tags?: Pick<PrismaTag, 'id' | 'name'>[]
  views: number
}

export default Blog
