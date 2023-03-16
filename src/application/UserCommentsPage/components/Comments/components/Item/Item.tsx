import { FC } from 'react'
import Comment from '@/types/Comment'

interface Props {
  title: Comment['blog']['title']
  comment: Comment['content']
}

const Item: FC<Props> = ({ title, comment }) => (
  <div className="px-7 py-3 mb-3 bg-background-variant rounded-xl">
    <div className="mb-2 text-lg font-medium">{title}</div>
    <div>{comment}</div>
  </div>
)

export default Item
