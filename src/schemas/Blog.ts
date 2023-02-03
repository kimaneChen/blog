import { z } from 'zod'

export const BlogSchema = z.object({
  title: z.string(),
  description: z.string(),
})

export type Blog = z.infer<typeof BlogSchema>
