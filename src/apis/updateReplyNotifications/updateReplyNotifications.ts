import axios, { AxiosResponse } from 'axios'
import { ReplyNotification } from '@/schemas/ReplyNotification'

const updateReplyNotifications = (data: {
  readAt: ReplyNotification['readAt']
}): Promise<AxiosResponse> => axios.patch('/api/user/reply-notifications', data)

export default updateReplyNotifications
