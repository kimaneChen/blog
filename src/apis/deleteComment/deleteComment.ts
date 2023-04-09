import Comment from '@/types/Reply'
import axios, { AxiosResponse } from 'axios'

const deleteComment = (commentId: Comment['id']): Promise<AxiosResponse> =>
  axios.delete(`/api/user/comments/${commentId}`)

export default deleteComment
