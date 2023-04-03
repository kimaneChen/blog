import { z } from 'zod'

export const ReplyNotificationSchema = z.object({
  readAt: z.string(),
})

export type ReplyNotification = z.infer<typeof ReplyNotificationSchema>
