import { FC, ReactNode } from 'react'
import Tag, { Variant } from '@/components/Tag'

export interface Props {
  children: ReactNode
  notifications: number
  active?: boolean
}

const Badge: FC<Props> = ({ notifications, active = false, children }) => (
  <div className="relative">
    <div className="absolute bg-error text-on-primary h-4 w-4 text-center rounded-full text-xs top-0 right-0 translate-x-1/2 -translate-y-1/2">
      {notifications}
    </div>
    <Tag variant={active ? Variant.White : Variant.Background}> {children} </Tag>
  </div>
)

export default Badge
