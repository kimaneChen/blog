import User from '@/types/User'

interface Comment {
  id: string
  parentId?: string | null
  user: Pick<User, 'id' | 'name' | 'image'>
  createdAt: string
  updatedAt: string
  title?: string
  comment: string
}

export default Comment
