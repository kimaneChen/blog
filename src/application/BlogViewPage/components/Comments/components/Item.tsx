import { FC, ReactNode } from 'react'
import Avatar from '@/components/Avatar'
import { BsDot } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { User } from '@/schemas/User'
import { FaRegSmile } from 'react-icons/fa'

interface Props {
  children: ReactNode
  isDeletable?: boolean
  replies: number
  relativeTime: string
  user: User
}

const Item: FC<Props> = ({ children, isDeletable = false, replies, relativeTime, user }) => (
  <section className="px-5 py-4 mb-4 bg-background-variant rounded-xl flex gap-3">
    <div>
      <Avatar src={user?.image} alt={user?.name} width={20} height={20} />
    </div>
    <div className="grow">
      <div className="font-bold">{user?.name}</div>
      <div className="mt-1">{children}</div>
      <div className="mt-2 pt-1 text-sm text-on-background flex items-center justify-between">
        <div className="flex items-center gap-1">
          <div>{relativeTime}</div>
          <BsDot />
          <div>Reply</div>
          <BsDot />
          {isDeletable && (
            <>
              <div>Delete</div>
              <BsDot />
            </>
          )}
          <FaRegSmile />
        </div>
        {replies !== 0 && (
          <div className="flex items-center">
            {`${replies} Replies`} <MdKeyboardArrowDown />
          </div>
        )}
      </div>
    </div>
  </section>
)

export default Item
