import UserLayout from '@/application/UserLayout'
import { useRouter } from 'next/router'
import Button, { Size, Variant } from '@/components/Button'
import useSWR from 'swr'
import Loading from '@/components/Loading'
import classNames from 'classnames'
import { NextPage } from 'next'
<<<<<<< HEAD
=======
import { useState } from 'react'
import Link from 'next/link'
import Blog from '@/types/Blog'
import Item, { CommentType } from './components/Item'
import Quote from './components/Quote/Quote'
>>>>>>> ad6ac005cecf9835023522640f4bba246028e1be
import AuthMessageToast from './components/AuthMessageToast'
import CommentNotifications from './components/CommentNotifications'
import ReplyNotifications from './components/ReplyNotifications'

enum Tabs {
  Blogs = 'Blogs',
  Comments = 'Comments',
}

const UserNotificationPage: NextPage = () => {
  const router = useRouter()
  const tab =
    {
      Comments: Tabs.Comments,
      Blogs: Tabs.Blogs,
    }[String(router.query.tab)] || Tabs.Blogs

  const { data: blogsWithComments, isLoading: isCommentsLoading } =
    useSWR('/api/user/notifications')

  return (
    <UserLayout className="px-7 pt-6 mt-10 border rounded-xl">
      <AuthMessageToast />
      <div className="flex gap-5 mb-6">
        {Object.values(Tabs).map((item) => (
          <Button
            key={item}
            variant={tab === item ? Variant.Background : Variant.Outline}
            size={Size.Small}
            className={classNames(
              tab === item ? ['border', 'border-dark'] : ['bg-background-variant']
            )}
            onClick={() => router.push(`/user/notifications?tab=${item}`)}
          >
            {item}
          </Button>
        ))}
      </div>
<<<<<<< HEAD
      {tab === Tabs.Blogs && <CommentNotifications />}
      {tab === Tabs.Comments && <ReplyNotifications />}
=======

      {currentActive === Tabs.Blogs &&
        (isCommentsLoading ? (
          <div className="h-[630px] flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          blogsWithComments &&
          blogsWithComments.map((blog: Blog) => (
            <Link href={`/blogs/${blog.id}`} key={blog.id}>
              <div id={blog.id}>
                <h3 className="text-lg font-medium mt-6 mb-3">{blog.title}</h3>
                {blog.comments &&
                  blog.comments.map((comment) => (
                    <Link href={`/blogs/${blog.id}?scrollTo=${comment.id}`} key={comment.id}>
                      <Item
                        key={comment.id}
                        type={CommentType.Commented}
                        user={comment.user}
                        createdAt={comment.createdAt}
                      >
                        {comment.content}
                      </Item>
                    </Link>
                  ))}
              </div>
            </Link>
          ))
        ))}

      {currentActive === Tabs.Comments && (
        <div>
          <Item
            type={CommentType.Replied}
            user={{ name: 'Long Zhao', email: 'test@example.com', id: '01', image: '' }}
            createdAt={new Date('2023-03-03')}
          >
            <Quote reference="Lorem ipsum dolor sit amet consectetur">
              Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
            </Quote>
          </Item>
          <Item
            type={CommentType.Replied}
            user={{ name: 'Long Zhao', email: 'test@example.com', id: '01', image: '' }}
            createdAt={new Date('2023-03-03')}
          >
            <Quote reference="Lorem ipsum dolor sit amet consectetur">
              Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
            </Quote>
          </Item>
          <Item
            type={CommentType.Replied}
            user={{ name: 'Long Zhao', email: 'test@example.com', id: '01', image: '' }}
            createdAt={new Date('2023-03-03')}
          >
            <Quote reference="Lorem ipsum dolor sit amet consectetur">
              Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
            </Quote>
          </Item>
          <Item
            type={CommentType.Replied}
            user={{ name: 'Long Zhao', email: 'test@example.com', id: '01', image: '' }}
            createdAt={new Date('2023-03-03')}
          >
            <Quote reference="Lorem ipsum dolor sit amet consectetur">
              Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
            </Quote>
          </Item>
        </div>
      )}
>>>>>>> ad6ac005cecf9835023522640f4bba246028e1be
    </UserLayout>
  )
}

export default UserNotificationPage
