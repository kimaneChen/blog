import React, { FC } from 'react'
import Link from 'next/link'
import CommentItem, { Type } from '@/application/CommentItem'
import CommentNotification from '@/types/CommentNotification'
import Quote from '@/components/Quote'

interface Props {
  notifications: Record<string, CommentNotification[]>
}

const CommentNotifications: FC<Props> = ({ notifications }) => (
  <>
    {Object.keys(notifications).map((key) => (
      <div id={key} key={key}>
        {notifications[key].map((commentNotification: CommentNotification) => (
          <Link
            href={`/blogs/${key}?scrollTo=${commentNotification.comment.id}`}
            key={commentNotification.comment.id}
          >
            <CommentItem
              key={commentNotification.comment.id}
              type={Type.Commented}
              user={commentNotification.comment.user}
              createdAt={commentNotification.comment.createdAt}
            >
              <Quote reference={notifications[key][0].comment.blog.title}>
                {commentNotification.comment.content}
              </Quote>
            </CommentItem>
          </Link>
        ))}
      </div>
    ))}
  </>
)
export default CommentNotifications
