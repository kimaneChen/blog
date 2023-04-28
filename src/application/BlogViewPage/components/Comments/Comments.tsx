import LoadMoreButton from '@/application/LoadMoreButton'
import Container, { Size, Space } from '@/components/Container'
import Comment from '@/types/Comment'
import { useRouter } from 'next/router'
import { FC } from 'react'
import useSWRInfinite from 'swr/infinite'
import { useSWRConfig } from 'swr'
import deleteComment from '@/apis/deleteComment'
import AddComment from './components/AddComment'
import CommentsUserList from './components/CommentsUserList'
import Item from './components/Item'

const PER_PAGE = 5

const Comments: FC = () => {
  const router = useRouter()
  const { id } = router.query

  const {
    data,
    isLoading,
    size,
    setSize,
    mutate: mutateComments,
  } = useSWRInfinite<Comment[]>(
    (index) => `/api/blogs/${id}/comments?page=${index + 1}&perPage=${PER_PAGE}`
  )

  const { mutate } = useSWRConfig()
  const mutateInteractions = (): void => {
    mutate(`/api/blogs/${id}/interactions`)
  }

  const handleMutate = (): void => {
    mutateComments()
    mutateInteractions()
  }

  const handleDelete = async (commentId: string): Promise<void> => {
    try {
      await deleteComment(commentId)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
    handleMutate()
  }

  const comments = data ? data.flat() : []
  const lastPage = data?.[data.length - 1]
  const isReachingEnd = lastPage && lastPage.length < PER_PAGE
  const isLoadMoreDisabled = isLoading || isReachingEnd
  return (
    <Container size={Size.Medium} space={Space.None}>
      <AddComment onSuccess={handleMutate} />
      <CommentsUserList />
      {comments.length > 0 && (
        <div className="mx-auto lg:pr-24">
          {comments.map((comment) => (
            <Item
              id={comment.id}
              key={comment.id}
              content={comment.content}
              createdAt={comment.createdAt}
              user={comment.user}
              replyNumber={comment.replyNumber}
              onReply={handleMutate}
              onCommentDelete={() => handleDelete(comment.id)}
              onReplyDelete={handleMutate}
            />
          ))}
          <div className="mb-20">
            <LoadMoreButton hasMore={!isLoadMoreDisabled} onLoadMore={() => setSize(size + 1)}>
              <span className="text-sm">More Comments</span>
            </LoadMoreButton>
          </div>
        </div>
      )}
    </Container>
  )
}

export default Comments
