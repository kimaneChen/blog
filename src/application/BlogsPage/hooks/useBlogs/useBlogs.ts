import Blog from '@/types/Blog'
import Tag from '@/types/Tag'
import queryString from 'query-string'
import useSWRInfinite from 'swr/infinite'

interface Result {
  size: number
  setSize: (size: number) => void
  blogs: Blog[]
  loadMore: () => void
  isLoadMoreDisabled: boolean
}

interface Params {
  tags?: Tag[]
  perPage?: number
}

const useBlogs = ({ tags, perPage = 3 }: Params | undefined = {}): Result => {
  const { data, isLoading, size, setSize } = useSWRInfinite<Blog[]>((index) =>
    queryString.stringifyUrl({
      url: '/api/blogs',
      query: {
        page: index + 1,
        perPage,
        tags: tags?.map((tag) => tag.id),
      },
    })
  )

  const blogs = data ? data.flat() : []

  const lastPage = data?.[data.length - 1]
  const isReachingEnd = !!lastPage && lastPage.length < perPage

  const isLoadMoreDisabled = isLoading || isReachingEnd

  const loadMore = (): void => {
    if (isReachingEnd) {
      return
    }

    setSize(size + 1)
  }

  return {
    size,
    setSize,
    blogs,
    loadMore,
    isLoadMoreDisabled,
  }
}

export default useBlogs
