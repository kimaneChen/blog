import { FC } from 'react'
import { BsDot } from 'react-icons/bs'
import { FaRegSmile } from 'react-icons/fa'
import DateFormat from '@/types/DateFormat'
import Date from '@/components/Date/Date'
import { useSession } from 'next-auth/react'
import Comment from '@/types/Comment'

interface Props {
  createdAt: Comment['createdAt']
  user: Comment['user']
  onReply: () => void
}

const Interactions: FC<Props> = ({ createdAt, onReply, user }) => {
  const { data: session } = useSession()
  return (
    <div className="relative flex items-center text-sm text-on-background">
      <Date format={DateFormat.LongTime}>{createdAt}</Date>
      {session?.user && (
        <>
          <BsDot />
          <button type="button" onClick={onReply}>
            Reply
          </button>
        </>
      )}
      {session?.user?.email === user?.email && (
        <>
          <BsDot />
          <button type="button">Delete</button>
        </>
      )}
      <BsDot />
      <FaRegSmile />
    </div>
  )
}

export default Interactions
