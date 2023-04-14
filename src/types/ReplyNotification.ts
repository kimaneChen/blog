import {
  ReplyNotification as PrismaReplyNotification,
  Reply as PrismaReply,
  Comment as PrismaComment,
  User as PrismaUser,
} from '@prisma/client'

interface ReplyNotification extends Pick<PrismaReplyNotification, 'id' | 'createdAt'> {
  reply: Pick<PrismaReply, 'id' | 'content'> & {
    createdAt: string
    user: Pick<PrismaUser, 'id' | 'name' | 'email' | 'image'>
    comment: Pick<PrismaComment, 'id' | 'content' | 'blogId'>
  }
  user: Pick<PrismaUser, 'id' | 'name' | 'email' | 'image'>
  replyId: string
}

export default ReplyNotification
