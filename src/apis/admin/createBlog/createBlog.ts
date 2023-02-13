import { Blog } from '@/schemas/Blog'
import { User } from '@/schemas/User'
import axios, { AxiosResponse } from 'axios'

const createBlog = (blog: Blog, userEmail: NonNullable<User['email']>): Promise<AxiosResponse> =>
  axios.post('/api/admin/blogs', {
    blog,
    userEmail,
  })

export default createBlog
