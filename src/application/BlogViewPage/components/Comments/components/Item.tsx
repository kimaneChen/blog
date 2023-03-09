import { FC } from 'react'
import Avatar from '@/components/Avatar'
import { BsDot } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { FaRegSmile } from 'react-icons/fa'
import Comment from '@/types/Comment'
import { useSession } from 'next-auth/react'
import FormattedTime from '@/components/FormattedTime'

interface Props {
  id?: Comment['id']
  content: Comment['content']
  createdAt: Comment['createdAt']
  user: Comment['user']
}

const Item: FC<Props> = ({ content, createdAt, user, id }) => {
  const { data: session } = useSession()
  return (
    <section id={id} className="px-5 py-4 mb-4 bg-background-variant rounded-xl flex gap-3">
      <div>
        <Avatar src={user?.image} alt={user?.name} width={20} height={20} />
      </div>
      <div className="grow">
        <div className="font-bold">{user?.name}</div>
        <div className="mt-1">{content}</div>
        <div className="mt-2 pt-1 text-sm text-on-background flex items-center justify-between">
          <div className="flex items-center gap-1">
            <FormattedTime className="text-sm text-on-background">{createdAt}</FormattedTime>
            {session?.user && <div>Reply</div>}
            {session?.user?.email === user?.email && (
              <>
                <div>Delete</div>
                <BsDot />
              </>
            )}
            <FaRegSmile />
          </div>
          <div className="flex items-center">
            {`${0} Replies`} <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Item
