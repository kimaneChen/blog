import { FC } from 'react'
import Comment from '@/types/Comment'
import CommentCard, { ReplyType } from '@/components/CommentCard'

interface Props {
  title: string
  comments: Comment[]
}

const BlogComments: FC<Props> = ({ title, comments }) => (
  <>
    <h3 className="text-lg font-medium mt-6 mb-3">{title}</h3>

    {comments.map(
      ({ id, parentId, user, createdAt, updatedAt, comment }) =>
        parentId === null && (
          <CommentCard
            key={id}
            id={id}
            user={user}
            createdAt={createdAt}
            updatedAt={updatedAt}
            comment={comment}
            replyType={ReplyType.Commented}
          />
        )
    )}
  </>
)

export default BlogComments
