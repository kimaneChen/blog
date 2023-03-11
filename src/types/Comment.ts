import { Comment as PrismaComment, User as PrismaUser, Blog as PrismaBlog } from '@prisma/client'

interface Comment extends Pick<PrismaComment, 'id' | 'content' | 'blogId'> {
  createdAt: Date
  updatedAt: string
  user?: Pick<PrismaUser, 'id' | 'name' | 'email' | 'image'>
  blog?: Pick<PrismaBlog, 'id' | 'title'>
}

export default Comment
