import { FC } from 'react'
import Comment from '@/types/Comment'
import { BsFillCaretRightFill } from 'react-icons/bs'
import LoadMoreButton from '@/application/LoadMoreButton'
import useSWRInfinite from 'swr/infinite'
import Reply from '@/types/Reply'
import deleteReply from '@/apis/deleteReply'
import Remark from '../Remark'

interface Props {
  commentId: Comment['id']
  onReply: () => void
  onDelete: () => void
}

const PER_PAGE = 5

const Replies: FC<Props> = ({ commentId, onReply, onDelete }) => {
  const { data, isLoading, size, setSize, mutate } = useSWRInfinite<Reply[]>(
    (index) => `/api/comments/${commentId}/replies?page=${index + 1}&perPage=${PER_PAGE}`
  )

  const replies = data ? data.flat() : []
  const lastPage = data?.[data.length - 1]
  const isReachingEnd = lastPage && lastPage.length < PER_PAGE
  const isLoadMoreDisabled = isLoading || isReachingEnd

  const handleDelete = async (replyId: string): Promise<void> => {
    try {
      await deleteReply(replyId)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
    mutate()
    onDelete()
  }

  return (
    <div className="pl-8">
      {replies.map((reply) => (
        <Remark
          key={reply.id}
          user={reply.user}
          content={reply.content}
          createdAt={reply.createdAt}
          header={
            <>
              {reply.user.name}
              {reply.replyTo && (
                <>
                  <BsFillCaretRightFill />
                  {reply.replyTo.user.name}
                </>
              )}
            </>
          }
          commentId={commentId}
          replyId={reply.id}
          onReply={() => {
            mutate()
            onReply()
          }}
          onDelete={() => {
            handleDelete(reply.id)
          }}
        />
      ))}
      <LoadMoreButton
        hasMore={!isLoadMoreDisabled}
        onLoadMore={() => {
          setSize(size + 1)
        }}
      >
        <span className="text-sm">MORE REPLIES</span>
      </LoadMoreButton>
    </div>
  )
}

export default Replies
