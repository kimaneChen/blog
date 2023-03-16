import { Comment as PrismaComment, User as PrismaUser, Blog as PrismaBlog } from '@prisma/client'

interface Comment extends Pick<PrismaComment, 'id' | 'content'> {
  createdAt: string
  updatedAt: string
  blog: Pick<PrismaBlog, 'id' | 'title'>
  user?: Pick<PrismaUser, 'id' | 'name' | 'email' | 'image'>
  replyNumber?: number
}

export default Comment
