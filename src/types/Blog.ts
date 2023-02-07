import User from '@/types/User'

interface Blog {
  id: string
  createdAt: string
  updatedAt: string
  userId: string
  title: string
  description: string
  user?: User
}

export default Blog
