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
  onReply: () => void
  onCommentDelete: () => void
  onReplyDelete: () => void
}

const Item: FC<Props> = ({
  content,
  createdAt,
  user,
  replyNumber,
  id,
  onReply,
  onCommentDelete,
  onReplyDelete,
}) => {
  const [isShowReplies, setIsShowReplies] = useState<boolean>(false)
  return (
    <section className="py-4 px-5 mb-4 rounded-xl bg-background-variant relative" id={id}>
      <Remark
        user={user}
        createdAt={createdAt}
        content={content}
        header={user?.name}
        commentId={id}
        onReply={onReply}
        onDelete={onCommentDelete}
      />
      {!!replyNumber && (
        <>
          {isShowReplies && <Replies commentId={id} onReply={onReply} onDelete={onReplyDelete} />}
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
