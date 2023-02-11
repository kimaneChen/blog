import { FC, ReactNode } from 'react'
import Avatar from '@/components/Avatar'
import { FaCheckCircle } from 'react-icons/fa'
import InlineComment from '@/components/InlineComment'
import AvatarProps from '@/types/Avatar'

export enum Type {
  Comment,
  Reply,
  React,
}

export interface Props {
  children: ReactNode
  avatar?: AvatarProps
  inline?: string
  type: Type
  relativeTime: string
  isChecked?: boolean
}

const Response: FC<Props> = ({
  children,
  avatar,
  inline,
  relativeTime,
  type,
  isChecked = false,
}) => (
  <div className="bg-background-variant mb-2 rounded-xl flex justify-between items-center ">
    <div className="p-3 text-sm">
      <div className="mb-1 flex text-on-background items-center gap-1.5">
        <div>
          <Avatar width={16} height={16} src={avatar?.src} alt={avatar?.alt} />
        </div>
        <div className="flex gap-1">
          <div>
            {type === Type.Comment && 'commented on'}
            {type === Type.Reply && 'replied'}
            {type === Type.React && `react with ${children}`}
          </div>
          {inline && <InlineComment>{inline}</InlineComment>}
        </div>
        <div>| {relativeTime}</div>
      </div>
      {type !== Type.React && <div>{children}</div>}
    </div>
    {isChecked && (
      <div className="px-5">
        <FaCheckCircle className="h-6 w-6" />
      </div>
    )}
  </div>
)

export default Response
