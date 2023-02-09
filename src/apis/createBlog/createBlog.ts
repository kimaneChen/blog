import { Blog } from '@/schemas/Blog'
import axios, { AxiosResponse } from 'axios'

const createBlog = (data: Blog): Promise<AxiosResponse> => axios.post('/api/user/blog', data)

export default createBlog
