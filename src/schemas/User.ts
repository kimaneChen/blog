import { z } from 'zod'

export const UserSchema = z.object({
  name: z.string(),
  email: z.string(),
  image: z.string().nullable(),
  role: z.string().optional(),
})

export interface User extends z.infer<typeof UserSchema> {}
