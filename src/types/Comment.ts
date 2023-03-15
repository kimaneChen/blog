import { Comment as PrismaComment, User as PrismaUser } from '@prisma/client'

interface Comment extends Pick<PrismaComment, 'id' | 'content'> {
  createdAt: string
  updatedAt: string
  user?: Pick<PrismaUser, 'id' | 'name' | 'email' | 'image'>
  replyNumber?: number
}

export default Comment
