import { FC } from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import CommentNotification from '@/types/CommentNotification'
import CommentItem, { Type } from '@/application/CommentItem'
import Quote from '@/components/Quote'

export const PER_PAGE = 10
interface Props {
  page: number
}

const Items: FC<Props> = ({ page }) => {
  const { data } = useSWR(`/api/user/comment-notifications?perPage=${PER_PAGE}&page=${page}`)

  return data?.map((commentNotification: CommentNotification) => (
    <CommentItem
      key={commentNotification.comment.id}
      type={Type.Commented}
      user={commentNotification.comment.user}
      createdAt={commentNotification.comment.createdAt}
    >
      <Quote
        reference={
          <Link href={`/blogs/${commentNotification.comment.blog.id}`}>
            {commentNotification.comment.blog.title}
          </Link>
        }
        prefix={<div className="rotate-45 h-3 w-3 text-outline"> &#9632; </div>}
      >
        <Link
          href={`/blogs/${commentNotification.comment.blog.id}?scrollTo=${commentNotification.comment.id}`}
        >
          {commentNotification.comment.content}
        </Link>
      </Quote>
    </CommentItem>
  ))
}

export default Items
