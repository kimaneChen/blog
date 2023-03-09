import Avatar from '@/components/Avatar'
import { FC, ReactNode } from 'react'
import User from '@/types/User'
import FormattedTime from '@/components/FormattedTime'

export enum CommentType {
  Commented = 'Commented',
  Replied = 'Replied',
}

interface Props {
  type: CommentType
  children: ReactNode
  user?: User | null
  createdAt?: string
}

const Item: FC<Props> = ({ type, children, user = null, createdAt = '2023-03-03' }) => (
  <div className="mb-3 p-3 rounded-xl bg-background-variant">
    <div className="flex gap-2 items-center mb-1 text-sm text-on-background">
      <Avatar width={20} height={20} src={user?.image} alt={user?.name} />
      <div className="text-dark">{user?.name}</div>
      <div>{type}</div>
      <hr className="h-5 border-r" />
      <div>
        <FormattedTime>{createdAt as string}</FormattedTime>
      </div>
    </div>
    <p className="pl-7">{children}</p>
  </div>
)

export default Item
