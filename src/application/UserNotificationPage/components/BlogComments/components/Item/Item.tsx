import { FC } from 'react'
import Comment from '@/types/Comment'
import Avatar from '@/components/Avatar'

export enum CommentType {
  Commented = 'Commented',
  Replied = 'Replied',
}

interface Props extends Comment {
  type: CommentType
}

const Item: FC<Props> = ({ user, createdAt, comment, type }) => (
  <div className="mb-3 p-3 rounded-xl bg-background-variant">
    <div className="flex gap-2 items-center mb-1 text-sm text-on-background">
      <Avatar width={20} height={20} src={user.image} alt={user.name} />
      <div className="text-dark">{user.name}</div>
      <div>{type}</div>
      <hr className="h-5 border-r" />
      <div>{createdAt}</div>
    </div>
    <p className="pl-7">{comment}</p>
  </div>
)

export default Item
