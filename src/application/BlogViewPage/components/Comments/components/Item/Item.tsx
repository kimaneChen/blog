import { FC, useState } from 'react'
import Comment from '@/types/Comment'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import Remark from './components/Remark'
import ToggleRepliesButton from './components/ToggleRepliesButton'
import Replies from './components/Replies'

interface Props {
  id: Comment['id']
  content: Comment['content']
  createdAt: Comment['createdAt']
  user: Comment['user']
  replyNumber: Comment['replyNumber']
}

const Item: FC<Props> = ({ content, createdAt, user, id, replyNumber }) => {
  const [isShowReplies, setIsShowReplies] = useState<boolean>(false)
  return (
    <section id={id} className="py-4 px-5 mb-4 rounded-xl bg-background-variant relative">
      <Remark user={user} createdAt={createdAt} content={content} header={user?.name} />
      {!!replyNumber && (
        <>
          {isShowReplies && <Replies />}
          <ToggleRepliesButton onToggle={() => setIsShowReplies(!isShowReplies)}>
            {isShowReplies ? (
              <>
                Fold All <MdKeyboardArrowUp />
              </>
            ) : (
              <>
                {replyNumber} Replies <MdKeyboardArrowDown />
              </>
            )}
          </ToggleRepliesButton>
        </>
      )}
    </section>
  )
}

export default Item
