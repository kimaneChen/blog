import UserLayout from '@/application/UserLayout'
import Button, { Size, Variant } from '@/components/Button'
import useSWR from 'swr'
import Loading from '@/components/Loading'
import classNames from 'classnames'
import { NextPage } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { groupBy } from 'lodash'
import CommentNotification from '@/types/CommentNotification'
import CommentItem, { Type } from '@/application/CommentItem'
import Quote from '@/components/Quote'
import AuthMessageToast from './components/AuthMessageToast'

enum Tabs {
  Blogs = 'Blogs',
  Comments = 'Comments',
}

const UserNotificationPage: NextPage = () => {
  const [currentActive, setCurrentActive] = useState(Tabs.Blogs)

  const { data, isLoading, error } = useSWR('/api/user/comment-notifications')

  if (error) {
    return null
  }

  const groupedCommentNotifications = groupBy(
    data,
    (commentNotification) => commentNotification.comment.blogId
  )

  return (
    <UserLayout className="px-7 pt-6 mt-10 border rounded-xl">
      <AuthMessageToast />
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
        (isLoading ? (
          <div className="h-[630px] flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          Object.keys(groupedCommentNotifications).map((key) => (
            <div id={key} key={key}>
              <Link href={`/blogs/${key}`}>
                <h3 className="text-lg font-medium mt-6 mb-3">
                  {groupedCommentNotifications[key][0].comment.blog.title}
                </h3>
              </Link>
              {groupedCommentNotifications[key].map((commentNotification: CommentNotification) => (
                <Link
                  href={`/blogs/${key}?scrollTo=${commentNotification.comment.id}`}
                  key={commentNotification.comment.id}
                >
                  <CommentItem
                    key={commentNotification.comment.id}
                    type={Type.Commented}
                    user={commentNotification.comment.user}
                    createdAt={commentNotification.comment.createdAt}
                  >
                    {commentNotification.comment.content}
                  </CommentItem>
                </Link>
              ))}
            </div>
          ))
        ))}

      {currentActive === Tabs.Comments && (
        <div>
          <CommentItem
            type={Type.Replied}
            user={{ name: 'Long Zhao', email: 'test@example.com', id: '01', image: '' }}
            createdAt="2023-03-03"
          >
            <Quote reference="Lorem ipsum dolor sit amet consectetur">
              Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
            </Quote>
          </CommentItem>
          <CommentItem
            type={Type.Replied}
            user={{ name: 'Long Zhao', email: 'test@example.com', id: '01', image: '' }}
            createdAt="2023-03-03"
          >
            <Quote reference="Lorem ipsum dolor sit amet consectetur">
              Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
            </Quote>
          </CommentItem>
          <CommentItem
            type={Type.Replied}
            user={{ name: 'Long Zhao', email: 'test@example.com', id: '01', image: '' }}
            createdAt="2023-03-03"
          >
            <Quote reference="Lorem ipsum dolor sit amet consectetur">
              Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
            </Quote>
          </CommentItem>
          <CommentItem
            type={Type.Replied}
            user={{ name: 'Long Zhao', email: 'test@example.com', id: '01', image: '' }}
            createdAt="2023-03-03"
          >
            <Quote reference="Lorem ipsum dolor sit amet consectetur">
              Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
            </Quote>
          </CommentItem>
        </div>
      )}
    </UserLayout>
  )
}

export default UserNotificationPage
