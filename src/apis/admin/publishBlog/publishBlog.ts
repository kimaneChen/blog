import Blog from '@/types/Blog'
import axios, { AxiosResponse } from 'axios'

const publishBlog = (blogId: Blog['id']): Promise<AxiosResponse> =>
  axios.post(`/api/admin/blogs/${blogId}`)

export default publishBlog
