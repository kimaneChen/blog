import axios, { AxiosResponse } from 'axios'
import { CommentNotification } from '@/schemas/CommentNotification'

const updateCommentNotifications = (data: {
  readAt: CommentNotification['readAt']
}): Promise<AxiosResponse> => axios.patch('/api/user/comment-notifications', data)

export default updateCommentNotifications
