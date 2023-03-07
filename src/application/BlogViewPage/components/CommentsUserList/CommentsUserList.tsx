import { FC } from 'react'
import Avatar from '@/components/Avatar'
import router from 'next/router'
import useSWR from 'swr'
import Comment from '@/types/Comment'

const CommentsUserList: FC = () => {
  const { id } = router.query
  const { data } = useSWR<Comment[]>(() => `/api/blogs/${id}/interactions`)
  return (
    <div className="pr-24 my-4 flex flex-row-reverse flex-wrap-reverse items-center gap-1">
      {data?.map((comment) => (
        <Avatar
          key={comment.user?.id}
          src={comment.user?.image}
          alt={comment.user?.name}
          width={16}
          height={16}
        />
      ))}
    </div>
  )
}

export default CommentsUserList
