interface User {
  id: string
  createdAt: string
  updatedAt: string
  name?: string | null
  email?: string | null
  emailVerified?: string | null
  image?: string | null
}

export default User
