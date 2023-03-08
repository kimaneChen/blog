import useSWRInfinite from 'swr/infinite'
import { FC } from 'react'
import { useRouter } from 'next/router'
import Comment from '@/types/Comment'
import LoadMoreButton from '@/application/LoadMoreButton'
import Item from './components/Item'

const Comments: FC = () => {
  const router = useRouter()
  const { id } = router.query
  const COMMENTS_PER_PAGE = 5

  const { data, isLoading, size, setSize } = useSWRInfinite<Comment[]>(
    (index) => `/api/blogs/${id}/comments?page=${index + 1}&perPage=${COMMENTS_PER_PAGE}`
  )

  const comments = data ? data.flat() : []
  const lastPage = data?.[data.length - 1]
  const isReachingEnd = lastPage && lastPage.length < COMMENTS_PER_PAGE
  const isLoadMoreDisabled = isLoading || isReachingEnd

  return (
    <div className="pr-24">
      {comments.map((comment) => (
        <Item
          key={comment.id}
          content={comment.content}
          createdAt={comment.createdAt}
          user={comment.user}
        />
      ))}
      <div className="text-center mb-20">
        <LoadMoreButton hasMore={!isLoadMoreDisabled} onLoadMore={() => setSize(size + 1)}>
          MORE COMMENTS
        </LoadMoreButton>
      </div>
    </div>
  )
}

export default Comments
