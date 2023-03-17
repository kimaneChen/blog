import {
  CommentNotification as PrismaCommentNotification,
  Comment as PrismaComment,
  Blog as PrismaBlog,
  User as PrismaUser,
} from '@prisma/client'

interface CommentNotification extends Pick<PrismaCommentNotification, 'id' | 'createdAt'> {
  comment: Pick<PrismaComment, 'id' | 'content'> & {
    createdAt: string
    user: Pick<PrismaUser, 'id' | 'name' | 'email' | 'image'>
    blog: Pick<PrismaBlog, 'id' | 'title'>
  }
  user: Pick<PrismaUser, 'id' | 'name' | 'email' | 'image'>
}

export default CommentNotification
