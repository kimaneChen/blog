import { Comment as PrismaComment, User as PrismaUser, Blog as PrismaBlog } from '@prisma/client'

interface Comment extends Pick<PrismaComment, 'id' | 'content' | 'blogId'> {
  createdAt: Date
  updatedAt: string
  blog: Pick<PrismaBlog, 'id' | 'title'>
  user?: Pick<PrismaUser, 'id' | 'name' | 'email' | 'image'>
<<<<<<< HEAD
  replyNumber?: number
=======
  blog?: Pick<PrismaBlog, 'id' | 'title'>
>>>>>>> ad6ac005cecf9835023522640f4bba246028e1be
}

export default Comment
