import User from '@/types/User'
import Tag from '@/types/Tag'

interface Blog {
  id: string
  createdAt: string
  updatedAt: string
  userId: string
  title: string
  description: string
  user?: User
  tags?: Tag[]
}

export default Blog
