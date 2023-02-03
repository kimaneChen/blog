import axios, { AxiosResponse } from 'axios'

export interface Data {
  title: string
  description: string
}

const createBlog = (data: Data): Promise<AxiosResponse> =>
  axios.post('/api/user/blog', {
    title: data.title,
  })

export default createBlog
