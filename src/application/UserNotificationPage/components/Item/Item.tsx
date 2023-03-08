import Avatar from '@/components/Avatar'
import { FC, ReactNode } from 'react'

export enum CommentType {
  Commented = 'Commented',
  Replied = 'Replied',
}

interface Props {
  type: CommentType
  children: ReactNode
}

const Item: FC<Props> = ({ type, children }) => (
  <div className="mb-3 p-3 rounded-xl bg-background-variant">
    <div className="flex gap-2 items-center mb-1 text-sm text-on-background">
      <Avatar width={20} height={20} />
      <div className="text-dark">Long Zhao</div>
      <div>{type}</div>
      <hr className="h-5 border-r" />
      <div>40 minutes ago</div>
    </div>
    <p className="pl-7">{children}</p>
  </div>
)

export default Item
