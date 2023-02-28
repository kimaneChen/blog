import { FC, ReactNode } from 'react'
import Avatar from '@/components/Avatar'
import { BsDot } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { User } from '@/schemas/User'
import { FaRegSmile } from 'react-icons/fa'

interface Props {
  children: ReactNode
  isDeletable?: boolean
  amountReplies: number
  relativeTime: string
  user: User
}

const Item: FC<Props> = ({ children, isDeletable = false, amountReplies, relativeTime, user }) => (
  <section className="px-5 py-4 mb-4 bg-background-variant rounded-xl flex gap-3">
    <div>
      <Avatar src={user?.image} alt={user?.name} width={20} height={20} />
    </div>
    <div className="w-full">
      <div className="font-bold">{user?.name}</div>
      <div className="mt-1">{children}</div>
      <div className="mt-2 text-sm text-on-background flex items-center justify-between">
        <div className="pt-1 flex items-center gap-1">
          <div className="pt-0.5">{relativeTime}</div>
          <BsDot />
          <div className="pt-0.5">Reply</div>
          <BsDot />
          {isDeletable && (
            <>
              <div className="pt-0.5">Delete</div>
              <BsDot />
            </>
          )}
          <FaRegSmile />
        </div>
        {amountReplies !== 0 && (
          <div className="flex pt-1.5 items-center">
            {`${amountReplies} Replies`} <MdKeyboardArrowDown />
          </div>
        )}
      </div>
    </div>
  </section>
)

export default Item
