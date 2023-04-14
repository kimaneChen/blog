import { FC, useEffect } from 'react'
import Image from 'next/image'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Modal, { Size } from '@/components/Modal'
import useSWRMutation from 'swr/mutation'
import CommentNotifications from '@/application/CommentNotifications'
import ReplyNotifications from '@/application/ReplyNotifications'
import updateCommentNotifications from '@/apis/updateCommentNotifications'
import { groupBy } from 'lodash'
import updateReplyNotifications from '@/apis/updateReplyNotifications'
import noNewNotification from './assets/noNewNotification.svg'

interface Props {
  onClose: () => void
}

const NotificationModal: FC<Props> = ({ onClose }) => {
  const { data: commentNotifications } = useSWR('/api/user/comment-notifications')
  const { data: replyNotifications } = useSWR('/api/user/reply-notifications')

  const groupedCommentNotifications = groupBy(
    commentNotifications,
    (commentNotification) => commentNotification.comment.blogId
  )

  const groupedReplyNotifications = groupBy(
    replyNotifications,
    (replyNotification) => replyNotification.reply.comment.blogId
  )

  const { trigger: mutateCommentNotifications } = useSWRMutation(
    '/api/user/comment-notifications?readAt=',
    () => updateCommentNotifications({ readAt: String(new Date()) })
  )
  const { trigger: mutateReplyNotifications } = useSWRMutation(
    '/api/user/reply-notifications?readAt=',
    () => updateReplyNotifications({ readAt: String(new Date()) })
  )

  const router = useRouter()

  useEffect(() => {
    const handleCloseModal = (): void => {
      onClose()
    }

    router.events.on('routeChangeStart', handleCloseModal)

    return () => {
      router.events.off('routeChangeStart', handleCloseModal)
    }
  }, [router, onClose])

  useEffect(() => {
    mutateCommentNotifications()
    mutateReplyNotifications()
  }, [mutateCommentNotifications, mutateReplyNotifications])

  return (
    <Modal onClose={onClose} enableCloseButton size={Size.Large}>
      <h3 className="text-lg font-medium mb-4">New Notifications</h3>
      <hr className="border-t absolute w-full left-0" />
      <div className="max-h-[432px] overflow-scroll">
        {commentNotifications || replyNotifications ? (
          <>
            <div className="text-xs font-medium text-on-background mt-3 mb-2">Comments</div>
            <ReplyNotifications notifications={groupedReplyNotifications} />

            <div className="text-xs font-medium text-on-background my-2">Blogs</div>
            <CommentNotifications notifications={groupedCommentNotifications} />

            <p className="py-4 text-center text-xs text-placeholder">
              There is no more notification to load
            </p>
          </>
        ) : (
          <div className="h-48 flex flex-col justify-center items-center">
            <Image src={noNewNotification} alt="No Notifications" className="w-5 mb-5" />
            <span className="text-sm font-normal text-placeholder">No new Notifications</span>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default NotificationModal
