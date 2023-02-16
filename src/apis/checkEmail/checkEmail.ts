import { User } from '@/schemas/User'
import axios, { AxiosResponse } from 'axios'

const checkEmail = (email: NonNullable<User['email']>): Promise<AxiosResponse> =>
  axios.post('/api/check-email', { email })

export default checkEmail
