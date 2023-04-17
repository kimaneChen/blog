import { UserProfile } from '@/schemas/UserProfile'
import axios, { AxiosResponse } from 'axios'

const updateUserProfile = (data: UserProfile): Promise<AxiosResponse> =>
  axios.patch('/api/user/profile', data)

export default updateUserProfile
