import { z } from 'zod'

export const NotificationSchema = z.object({
  blogId: z.string().optional(),
  commentId: z.string().optional(),
})

export type Notification = z.infer<typeof NotificationSchema>
