import { User as PrismaUser } from '@prisma/client'

interface User extends Pick<PrismaUser, 'id' | 'name' | 'email' | 'image' | 'occupation'> {
  createdAt: string
  updatedAt: string
}

export default User
