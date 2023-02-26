import { FC, ReactNode } from 'react'
import Avatar from '@/components/Avatar'
import { BsDot } from 'react-icons/bs'
import IconSmile from '@/components/IconSmile'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { User } from '@/schemas/User'

interface Props {
  children: ReactNode
  isMyComment?: boolean
  amountReplies?: number
  relativeTime: string
  commentUser: User
}

const Item: FC<Props> = ({
  children,
  isMyComment = false,
  amountReplies,
  relativeTime,
  commentUser,
}) => (
  <section className="px-5 py-4 mb-4 bg-background-variant rounded-xl flex gap-3">
    <div>
      <Avatar src={commentUser?.image} alt={commentUser?.name} width={20} height={20} />
    </div>
    <div className="w-full">
      <div className="font-bold">{commentUser?.name}</div>
      <div className="mt-1">{children}</div>
      <div className="mt-2 text-sm text-on-background flex items-center justify-between">
        <div className="pt-1  flex items-center gap-1">
          <div className="pt-0.5">{relativeTime}</div>
          <BsDot />
          <div className="pt-0.5">Reply</div>
          <BsDot />
          {isMyComment && (
            <>
              <div className="pt-0.5">Delete</div>
              <BsDot />
            </>
          )}

          <IconSmile />
        </div>
        {amountReplies && (
          <div className="flex pt-1.5 items-center">
            {`${amountReplies} Replies`} <MdKeyboardArrowDown />
          </div>
        )}
      </div>
    </div>
  </section>
)

export default Item
