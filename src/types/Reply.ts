import User from '@/types/User'
import Blog from '@/types/Blog'
import Comment from '@/types/Comment'

interface Reply {
  id: string
  createdAt: string
  updatedAt?: string
  title: string
  content: any
  user?: Pick<User, 'id' | 'name' | 'email' | 'image'>
  blog?: Pick<Blog, 'id' | 'title'>
  comment?: Pick<Comment, 'id'>
  replyTo?: Pick<Reply, 'id' | 'user'>
}

export default Reply
