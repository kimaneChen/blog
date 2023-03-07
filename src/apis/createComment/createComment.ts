import { Comment } from '@/schemas/Comment'
import axios, { AxiosResponse } from 'axios'

const createComment = (data: Comment): Promise<AxiosResponse> =>
  axios.post('/api/user/comments', data)

export default createComment
