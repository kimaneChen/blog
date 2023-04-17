import { FC, useState } from 'react'
import Comment from '@/types/Comment'
<<<<<<< HEAD
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import Remark from './components/Remark'
import ToggleRepliesButton from './components/ToggleRepliesButton'
import Replies from './components/Replies'
=======
import { useSession } from 'next-auth/react'
import FormattedTime from '@/components/FormattedTime'
>>>>>>> ad6ac005cecf9835023522640f4bba246028e1be

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

<<<<<<< HEAD
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
=======
const Item: FC<Props> = ({ content, createdAt, user, id }) => {
  const { data: session } = useSession()
  return (
    <section id={id} className="px-5 py-4 mb-4 bg-background-variant rounded-xl flex gap-3">
      <div className="min-w-[20px]">
        <Avatar src={user?.image} alt={user?.name} width={20} height={20} />
      </div>
      <div className="grow">
        <div className="font-bold">{user?.name}</div>
        <div className="mt-1">{content}</div>
        <div className="mt-2 pt-1 text-sm text-on-background flex items-center justify-between">
          <div className="flex items-center gap-1">
            <FormattedTime className="text-sm text-on-background">{createdAt}</FormattedTime>
            {session?.user && <div>Reply</div>}
            {session?.user && (
>>>>>>> ad6ac005cecf9835023522640f4bba246028e1be
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
