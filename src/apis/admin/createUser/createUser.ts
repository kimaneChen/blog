import { User } from '@/schemas/User'
import axios, { AxiosResponse } from 'axios'

const createUser = (data: User): Promise<AxiosResponse> => axios.post('/api/admin/users', data)

export default createUser
