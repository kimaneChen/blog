import { z } from 'zod'

export const UserProfileSchema = z.object({
  name: z.string().optional(),
  occupation: z.string().optional(),
  selfIntroduction: z.string().optional(),
  linkedInLink: z.string().optional(),
  gitHubLink: z.string().optional(),
})

export interface UserProfile extends z.infer<typeof UserProfileSchema> {}
