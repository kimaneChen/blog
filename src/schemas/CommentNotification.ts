import { z } from 'zod'

export const CommentNotificationSchema = z.object({
  blogId: z.string(),
})

export type CommentNotification = z.infer<typeof CommentNotificationSchema>
