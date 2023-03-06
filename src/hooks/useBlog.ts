import { useRouter } from 'next/router'
import useSWR from 'swr'
import Blog from '@/types/Blog'

interface Result {
  blog: Blog
  isLoading: boolean
}

const useBlog = (): Result => {
  const router = useRouter()
  const { id } = router.query
  const { data: blog, isLoading } = useSWR(`/api/blogs/${id}`)
  return { blog, isLoading }
}

export default useBlog
