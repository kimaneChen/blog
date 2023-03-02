import { FC } from 'react'
import Comment from '@/types/Comment'
import Item, { CommentType } from './components/Item'

interface Props {
  title: string
  comments: Comment[]
}

const BlogComments: FC<Props> = ({ title, comments }) => (
  <>
    <h3 className="text-lg font-medium mt-6 mb-3">{title}</h3>

    {comments.map(({ id, user, createdAt, updatedAt, comment }) => (
      <Item
        key={id}
        id={id}
        user={user}
        createdAt={createdAt}
        updatedAt={updatedAt}
        comment={comment}
        type={CommentType.Commented}
      />
    ))}
  </>
)

export default BlogComments
