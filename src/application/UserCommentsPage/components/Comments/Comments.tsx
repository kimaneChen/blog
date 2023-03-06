import { FC } from 'react'
import Comment from '@/types/Comment'
import Item from './components/Item'

export interface Props {
  date: string
  comments: Comment[]
}

const Comments: FC<Props> = ({ date, comments }) => (
  <div className="mb-6">
    <div className="text-sm text-on-background mb-3">{date}</div>
    {comments.map((item) => (
      <Item title={item.title} comment={item.comment} key={item.id} />
    ))}
  </div>
)

export default Comments
