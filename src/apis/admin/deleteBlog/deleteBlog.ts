import Blog from '@/types/Blog'
import axios, { AxiosResponse } from 'axios'

const deleteBlog = (blogId: Blog['id']): Promise<AxiosResponse> =>
  axios.delete(`/api/admin/blogs/${blogId}`)

export default deleteBlog
