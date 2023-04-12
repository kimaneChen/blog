import { User } from '@/schemas/User'
import axios, { AxiosResponse } from 'axios'

const updateAvatar = (image: User['image']): Promise<AxiosResponse> =>
  axios.patch('/api/user', { image })

export default updateAvatar
