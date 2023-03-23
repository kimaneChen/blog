import axios, { AxiosResponse } from 'axios'
import { CommentNotification } from '@/schemas/CommentNotification'

const updateNotifications = (data: {
  readAt: CommentNotification['readAt']
}): Promise<AxiosResponse> => axios.patch('/api/user/notifications', data)

export default updateNotifications
