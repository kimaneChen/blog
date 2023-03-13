import UserLayout from '@/application/UserLayout'
import Button, { Size, Variant } from '@/components/Button'
import useSWR from 'swr'
import Loading from '@/components/Loading'
import classNames from 'classnames'
import { NextPage } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import Blog from '@/types/Blog'
import Item, { CommentType } from './components/Item'
import Quote from './components/Quote/Quote'
import AuthMessageToast from './components/AuthMessageToast'

enum Tabs {
  Blogs = 'Blogs',
  Comments = 'Comments',
}

const UserNotificationPage: NextPage = () => {
  const [currentActive, setCurrentActive] = useState(Tabs.Blogs)

  const { data: blogsWithComments, isLoading: isCommentsLoading } =
    useSWR('/api/user/notifications')

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
    </UserLayout>
  )
}

export default UserNotificationPage
