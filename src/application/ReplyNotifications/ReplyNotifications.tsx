import React, { FC } from 'react'
import CommentItem, { Type } from '@/application/CommentItem'
import Link from 'next/link'
import Quote from '@/components/Quote'
import ReplyNotification from '@/types/ReplyNotification'

interface Props {
  notifications: Record<string, ReplyNotification[]>
}

const ReplyNotifications: FC<Props> = ({ notifications }) => (
  <>
    {Object.keys(notifications).map((key) => (
      <div id={key} key={key}>
        {notifications[key].map((replyNotification: ReplyNotification) => (
          <Link
            href={`/blogs/${key}?scrollTo=${replyNotification.replyId}`}
            key={replyNotification.replyId}
          >
            <CommentItem
              key={replyNotification.replyId}
              type={Type.Replied}
              user={replyNotification.reply.user}
              createdAt={replyNotification.reply.createdAt}
            >
              <Quote reference={notifications[key][0].reply.comment.content}>
                {replyNotification.reply.content}
              </Quote>
            </CommentItem>
          </Link>
        ))}
      </div>
    ))}
  </>
)
export default ReplyNotifications
