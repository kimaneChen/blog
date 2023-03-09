import { FC } from 'react'
import Comment from '@/types/Comment'
import Avatar from '@/components/Avatar'
import FormattedTime from '../FormattedTime'

export enum ReplyType {
  Replied = 'Replied',
  Commented = 'Commented',
}

interface Props extends Comment {
  replyComment?: string
  replyType: ReplyType
}

const CommentCard: FC<Props> = ({
  user,
  createdAt,
  content,
  replyType,
  replyComment = 'No reply from others yet',
}) => (
  <div className="mb-3 p-3 rounded-xl bg-background-variant">
    <div className="flex gap-2 items-center mb-1 text-sm">
      <Avatar width={20} height={20} src={user?.image} alt={user?.name} />
      <div>{user?.name}</div>
      <div className="text-on-background">{replyType}</div>
      <hr className="h-5 border-r border-dark" />
      <div className="text-on-background">
        <FormattedTime>{createdAt}</FormattedTime>
      </div>
    </div>
    {replyType === ReplyType.Replied ? (
      <div className="px-7">
        <p className="mb-2">{replyComment}</p>
        <p className="text-sm text-on-background before:border-l-4 before:rounded-lg before:h-full before:mr-1">
          {content}
        </p>
      </div>
    ) : (
      <p className="px-7 mb-2">{content}</p>
    )}
  </div>
)

export default CommentCard
