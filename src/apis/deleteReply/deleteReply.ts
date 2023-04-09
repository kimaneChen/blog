import Reply from '@/types/Reply'
import axios, { AxiosResponse } from 'axios'

const deleteReply = (replyId: Reply['id']): Promise<AxiosResponse> =>
  axios.delete(`/api/user/replies/${replyId}`)

export default deleteReply
