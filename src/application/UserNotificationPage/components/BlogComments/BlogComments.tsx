import { FC } from 'react'
import Comment from '@/types/Comment'
import CommentCard, { ReplyType } from '@/components/CommentCard'
import Link from 'next/link'

interface Props {
  blogId: string
  title: string
  comments: Comment[]
}

const BlogComments: FC<Props> = ({ title, comments, blogId }) => (
  <Link href={`/blogs/${blogId}`}>
    <h3 className="text-lg font-medium mt-6 mb-3">{title}</h3>

    {comments.map(({ id, user, createdAt, updatedAt, content }) => (
      <Link href={`/blogs/${blogId}?scrollTo=${id}`} key={id}>
        <CommentCard
          key={id}
          id={id}
          user={user}
          createdAt={createdAt}
          updatedAt={updatedAt}
          comment={content}
          replyType={ReplyType.Commented}
        />
      </Link>
    ))}
  </Link>
)

export default BlogComments
