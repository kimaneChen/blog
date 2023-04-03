import { z } from 'zod'

export const CommentNotificationSchema = z.object({
  readAt: z.string(),
})

export type CommentNotification = z.infer<typeof CommentNotificationSchema>
