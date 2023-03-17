import { FC, useState } from 'react'
import Image from 'next/image'
import Modal, { Size, Position } from '@/components/Modal'
import Quote from '@/components/Quote'
import CommentItem, { Type } from '@/application/CommentItem'
import noNewNotification from './assets/noNewNotification.svg'

interface Props {
  onClose: () => void
}

const NotificationModal: FC<Props> = ({ onClose }) => {
  const [data] = useState(true)

  return (
    <Modal onClose={onClose} enableCloseButton size={Size.Large} position={Position.Top}>
      <h3 className="text-lg font-medium mb-4">New Notifications</h3>
      <hr className="border-t absolute w-full left-0" />
      <div className="max-h-[432px] overflow-scroll">
        {data ? (
          <>
            <div className="text-xs font-medium text-on-background mt-3 mb-2">Comments</div>
            <CommentItem type={Type.Replied}>
              <Quote reference="Lorem ipsum dolor sit amet consectetur.(This is the comment that was answered)">
                Lorem ipsum dolor sit amet consectetur.
              </Quote>
            </CommentItem>
            <CommentItem type={Type.Replied}>
              <Quote reference="Lorem ipsum dolor sit amet consectetur.(This is the comment that was answered)">
                Lorem ipsum dolor sit amet consectetur.
              </Quote>
            </CommentItem>

            <div className="text-xs font-medium text-on-background my-2">Blogs</div>
            <CommentItem type={Type.Commented}>
              <Quote reference="Lorem ipsum dolor sit amet cosectetur.(This is the blog title)">
                Lorem ipsum dolor sit amet consectetur. Pharetra lacus (This is
                commentt&rsquo;scontent)
              </Quote>
            </CommentItem>
            <CommentItem type={Type.Commented}>
              <Quote reference="Lorem ipsum dolor sit amet cosectetur.(This is the blog title)">
                Lorem ipsum dolor sit amet consectetur. Pharetra lacus (This is
                commentt&rsquo;scontent)
              </Quote>
            </CommentItem>
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