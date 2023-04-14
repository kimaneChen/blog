import { FC } from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import ReplyNotification from '@/types/ReplyNotification'
import CommentItem, { Type } from '@/application/CommentItem'
import Quote from '@/components/Quote'

export const PER_PAGE = 10

interface Props {
  page: number
}

const Items: FC<Props> = ({ page }) => {
  const { data } = useSWR(`/api/user/reply-notifications?perPage=${PER_PAGE}&page=${page}`)
  return data?.map((replyNotification: ReplyNotification) => (
    <CommentItem
      key={replyNotification.reply.id}
      type={Type.Replied}
      user={replyNotification.reply.user}
      createdAt={replyNotification.reply.createdAt}
    >
      <Quote
        reference={
          <Link
            href={`/blogs/${replyNotification.reply.comment.blogId}?scrollTo=${replyNotification.reply.comment.id}`}
          >
            {replyNotification.reply.comment.content}
          </Link>
        }
      >
        <Link
          href={`/blogs/${replyNotification.reply.comment.blogId}?scrollTo=${replyNotification.reply.id}`}
        >
          {replyNotification.reply.content}
        </Link>
      </Quote>
    </CommentItem>
  ))
}

export default Items
