import UserLayout from '@/application/UserLayout'
import Button, { Size, Variant } from '@/components/Button'
import classNames from 'classnames'
import { NextPage } from 'next'
import { useState } from 'react'
import Quote from '@/components/Quote'
import CommentItem, { Type } from '@/application/CommentItem'
import AuthMessageToast from './components/AuthMessageToast'

enum Tabs {
  Blogs = 'Blogs',
  Comments = 'Comments',
}

const UserNotificationPage: NextPage = () => {
  const [currentActive, setCurrentActive] = useState(Tabs.Blogs)

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

      {currentActive === Tabs.Blogs && (
        <div>
          <h3 className="text-lg font-medium mt-6 mb-3">
            How to Build a Fullstack App with Next.js, Prisma, and PostgreSQL
          </h3>
          <CommentItem type={Type.Commented}>
            Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
          </CommentItem>
          <CommentItem type={Type.Commented}>
            Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
          </CommentItem>
          <CommentItem type={Type.Commented}>
            Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
          </CommentItem>
        </div>
      )}

      {currentActive === Tabs.Comments && (
        <div>
          <CommentItem type={Type.Replied}>
            <Quote reference="Lorem ipsum dolor sit amet consectetur">
              Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
            </Quote>
          </CommentItem>
          <CommentItem type={Type.Replied}>
            <Quote reference="Lorem ipsum dolor sit amet consectetur">
              Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
            </Quote>
          </CommentItem>
          <CommentItem type={Type.Replied}>
            <Quote reference="Lorem ipsum dolor sit amet consectetur">
              Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
            </Quote>
          </CommentItem>
          <CommentItem type={Type.Replied}>
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
