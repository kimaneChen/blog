import { z } from 'zod'

export const CommentNotificationSchema = z.object({
  commentId: z.string(),
  readAt: z.date().optional(),
})

export type CommentNotification = z.infer<typeof CommentNotificationSchema>
