import { z } from 'zod'

export const CommentSchema = z.object({
  content: z.string(),
  blogId: z.string(),
})

export type Comment = z.infer<typeof CommentSchema>
