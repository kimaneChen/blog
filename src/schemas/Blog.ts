import { z } from 'zod'

export const BlogSchema = z.object({
  title: z.string(),
  description: z.string().nullable().optional(),
  tags: z.array(z.string()),
  content: z.any().optional(),
})

export type Blog = z.infer<typeof BlogSchema>
