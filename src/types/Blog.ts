import User from '@/types/User'
import Tag from '@/types/Tag'

interface Blog {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  description: string | null
  unpublishedAt: string | null
  content: any | null
  user?: Pick<User, 'id' | 'name' | 'email' | 'image'>
  tags?: Tag[]
}

export default Blog
