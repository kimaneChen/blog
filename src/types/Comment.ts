import User from '@/types/User'
import Blog from '@/types/Blog'

interface Comment {
  id: string
  createdAt: string
  updatedAt?: string
  content?: any
  user?: Pick<User, 'id' | 'name' | 'email' | 'image'>
  blog?: Pick<Blog, 'id' | 'title'>
  title?: string
  comment: string
  replies?: Comment[]
  parentId?: string | null
}

export default Comment
