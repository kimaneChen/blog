import React, { FC } from 'react'
import Link from 'next/link'
import Comment from '@/types/Comment'
import Item from './components/Item'

type Props = {
  date: string
  comments: Comment[]
}

const Comments: FC<Props> = ({ date, comments }) => (
  <div key={date} className="mb-6">
    <div className="text-sm text-on-background mb-3">{date}</div>
    <ul>
      {comments.map((comment) => (
        <Link key={comment.id} href={`/blogs/${comment.blog.id}?scrollTo=${comment.id}`}>
          <Item title={comment.blog.title} comment={comment.content} />
        </Link>
      ))}
    </ul>
  </div>
)

export default Comments
