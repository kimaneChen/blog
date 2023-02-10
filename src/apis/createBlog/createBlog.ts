import { Blog } from '@/schemas/Blog'
import axios, { AxiosResponse } from 'axios'

const createBlog = (data: Blog): Promise<AxiosResponse> => axios.post('/api/user/blogs', data)

export default createBlog
