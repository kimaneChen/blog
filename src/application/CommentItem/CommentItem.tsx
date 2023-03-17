import Avatar from '@/components/Avatar'
import { FC, ReactNode } from 'react'
import Comment from '@/types/Comment'
import RelativeDateTime from '@/components/RelativeDateTime'

export enum Type {
  Commented = 'Commented',
  Replied = 'Replied',
}
interface Props {
  type: Type
  children: ReactNode
  user: Comment['user']
  createdAt: Comment['createdAt']
}

const CommentItem: FC<Props> = ({ type, children, user, createdAt }) => (
  <div className="mb-3 p-3 rounded-xl bg-background-variant">
    <div className="flex gap-2 items-center mb-1 text-sm text-on-background">
      <Avatar width={20} height={20} src={user?.image} alt={user?.name} />
      <div className="text-dark">{user?.name}</div>
      <div>{type}</div>
      <hr className="h-5 border-r" />
      <div>
        <RelativeDateTime>{createdAt}</RelativeDateTime>
      </div>
    </div>
    <p className="pl-7">{children}</p>
  </div>
)

export default CommentItem
