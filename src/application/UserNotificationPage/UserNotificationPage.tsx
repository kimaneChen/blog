import { useState } from 'react'
import { NextPage } from 'next'
import classNames from 'classnames'
import UserLayout from '@/application/UserLayout'
import Button, { Size, Variant } from '@/components/Button'
import CommentCard, { ReplyType } from '@/components/CommentCard'
import BlogComments from './components/BlogComments'
import { MYBLOGSWITHCOMMENTS, MYCOMMENTS } from './MockData'

enum Tabs {
  Blogs = 'Blogs',
  Comments = 'Comments',
}

const UserNotificationPage: NextPage = () => {
  const [currentActive, setCurrentActive] = useState(Tabs.Blogs)

  return (
    <UserLayout className="px-7 pt-6 mt-10 border rounded-xl">
      <div className="flex gap-5 mb-6">
        {Object.values(Tabs).map((tab) => (
          <Button
            key={tab}
            variant={currentActive === tab ? Variant.Background : Variant.Outline}
            size={Size.Small}
            className={classNames(
              currentActive === tab ? ['border', 'border-dark'] : ['bg-background-variant']
            )}
            onClick={() => setCurrentActive(tab)}
          >
            {tab}
          </Button>
        ))}
      </div>

      {currentActive === Tabs.Blogs &&
        MYBLOGSWITHCOMMENTS.map(({ id, title, comments }) => (
          <BlogComments key={id} title={title} comments={comments} />
        ))}

      {currentActive === Tabs.Comments &&
        MYCOMMENTS.map(
          ({ comment, replies }) =>
            replies.length > 0 &&
            replies.map(({ id, user, createdAt, updatedAt, comment: replyComment }) => (
              <CommentCard
                key={id}
                id={id}
                user={user}
                createdAt={createdAt}
                updatedAt={updatedAt}
                comment={comment}
                replyComment={replyComment}
                replyType={ReplyType.Replied}
              />
            ))
        )}
    </UserLayout>
  )
}

export default UserNotificationPage
