import { FC, ReactNode } from 'react'
import Badge, { Variant } from '@/components/Badge'

export interface Props {
  children: ReactNode
  notifications: number
  active?: boolean
}

const Tag: FC<Props> = ({ notifications, active = false, children }) => (
  <div className="relative">
    <div className="absolute bg-error text-on-primary h-4 w-4 text-center rounded-full text-xs top-0 right-0 translate-x-1/2 -translate-y-1/2">
      {notifications}
    </div>
    <Badge variant={active ? Variant.White : Variant.Background}> {children} </Badge>
  </div>
)

export default Tag
