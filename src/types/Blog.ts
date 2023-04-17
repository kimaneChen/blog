import {
  Blog as PrismaBlog,
  User as PrismaUser,
  Tag as PrismaTag,
  Comment as PrismaComment,
} from '@prisma/client'

interface BlogComment extends Pick<PrismaComment, 'id' | 'content'> {
  createdAt: Date
  user?: Pick<PrismaUser, 'id' | 'name' | 'email' | 'image'>
}

interface Blog extends Pick<PrismaBlog, 'id' | 'title' | 'description'> {
  createdAt: string
  updatedAt: string
  unpublishedAt: string | null
  content: any
  user?: Pick<PrismaUser, 'id' | 'name' | 'email' | 'image' | 'occupation'>
  tags?: Pick<PrismaTag, 'id' | 'name'>[]
  comments?: BlogComment[]
}

export default Blog
