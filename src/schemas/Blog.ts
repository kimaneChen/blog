import { z } from 'zod'

export const BlogSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
})

export type Blog = z.infer<typeof BlogSchema>
