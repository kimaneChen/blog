import { FC } from 'react'
import { BsDot } from 'react-icons/bs'
import { FaRegSmile } from 'react-icons/fa'
import RelativeDateTime from '@/components/RelativeDateTime'
import { useSession } from 'next-auth/react'
import Comment from '@/types/Comment'

interface Props {
  createdAt: Comment['createdAt']
  user: Comment['user']
  onReply: () => void
  onDelete: () => void
}

const Interactions: FC<Props> = ({ createdAt, onReply, onDelete, user }) => {
  const { data: session } = useSession()
  return (
    <div className="relative flex items-center text-sm text-on-background">
      <RelativeDateTime>{createdAt}</RelativeDateTime>
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
          <button type="button" onClick={onDelete}>
            Delete
          </button>
        </>
      )}
      <BsDot />
      <FaRegSmile />
    </div>
  )
}

export default Interactions
