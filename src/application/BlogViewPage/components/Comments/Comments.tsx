import LoadMoreButton from '@/application/LoadMoreButton'
import Container, { Size } from '@/components/Container'
import Comment from '@/types/Comment'
import { useRouter } from 'next/router'
import { FC } from 'react'
import useSWRInfinite from 'swr/infinite'
import AddComment from './components/AddComment'
import CommentsUserList from './components/CommentsUserList'
import Item from './components/Item'

const COMMENTS_PER_PAGE = 5

const Comments: FC = () => {
  const router = useRouter()
  const { id } = router.query

  const { data, isLoading, size, setSize, mutate } = useSWRInfinite<Comment[]>(
    (index) => `/api/blogs/${id}/comments?page=${index + 1}&perPage=${COMMENTS_PER_PAGE}`
  )

  const comments = data ? data.flat() : []
  const lastPage = data?.[data.length - 1]
  const isReachingEnd = lastPage && lastPage.length < COMMENTS_PER_PAGE
  const isLoadMoreDisabled = isLoading || isReachingEnd

  return (
    <Container size={Size.Narrow}>
      <AddComment onSuccess={mutate} />
      <CommentsUserList />
      <div className="pr-24">
        {comments.map((comment) => (
          <Item
            id={comment.id}
            key={comment.id}
            content={comment.content}
            createdAt={comment.createdAt}
            user={comment.user}
            replyNumber={2}
          />
        ))}
        <div className="mb-20">
          <LoadMoreButton hasMore={!isLoadMoreDisabled} onLoadMore={() => setSize(size + 1)}>
            <span className="text-sm">MORE COMMENTS</span>
          </LoadMoreButton>
        </div>
      </div>
    </Container>
  )
}

export default Comments
