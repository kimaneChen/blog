import { Blog } from '@/schemas/Blog'
import axios, { AxiosResponse } from 'axios'

const updateBlog = (id: string, data: Blog): Promise<AxiosResponse> =>
  axios.put(`/api/user/blogs/${id}`, data)

export default updateBlog
