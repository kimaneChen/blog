import { Comment as PrismaComment, User as PrismaUser } from '@prisma/client'
import Blog from './Blog'

interface Comment extends Pick<PrismaComment, 'id' | 'content' | 'blogId'> {
  createdAt: string
  updatedAt: string
  user?: Pick<PrismaUser, 'id' | 'name' | 'email' | 'image'>
  blog?: Blog
}

export default Comment
