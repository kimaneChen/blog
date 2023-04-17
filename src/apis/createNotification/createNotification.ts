import { Notification } from '@/schemas/Notification'
import axios, { AxiosResponse } from 'axios'

const createNotification = (data: Notification): Promise<AxiosResponse> =>
  axios.post('/api/user/notifications', data)

export default createNotification
