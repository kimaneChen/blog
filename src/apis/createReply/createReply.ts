import { Reply } from '@/schemas/Reply'
import axios, { AxiosResponse } from 'axios'

const createReply = (data: Reply): Promise<AxiosResponse> => axios.post('/api/user/replies', data)

export default createReply
