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
      <Avatar width={28} height={28} src={user?.image} alt={user?.name} />
      <div className="flex flex-col gap-0 md:flex-row md:gap-2">
        <div className="text-dark">{user?.name}</div>
        <div className="flex gap-2 text-xs md:text-sm">
          <div>{type}</div>
          <hr className="h-5 border-r border-r-on-background" />
          <div>
            <RelativeDateTime>{createdAt}</RelativeDateTime>
          </div>
        </div>
      </div>
    </div>
    <p className="pl-9">{children}</p>
  </div>
)

export default CommentItem
