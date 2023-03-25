import { z } from 'zod'

export const ReplySchema = z.object({
  commentId: z.string(),
  content: z.string(),
  replyToId: z.string().optional(),
})

export type Reply = z.infer<typeof ReplySchema>
