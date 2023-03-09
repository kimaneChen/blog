import UserLayout from '@/application/UserLayout'
import Button, { Size, Variant } from '@/components/Button'
import classNames from 'classnames'
import { NextPage } from 'next'
import { useState } from 'react'
import Item, { CommentType } from './components/Item'
import Quote from './components/Quote/Quote'
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
          <Item type={CommentType.Commented}>
            Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
          </Item>
          <Item type={CommentType.Commented}>
            Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
          </Item>
          <Item type={CommentType.Commented}>
            Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
          </Item>
        </div>
      )}

      {currentActive === Tabs.Comments && (
        <div>
          <Item type={CommentType.Replied}>
            <Quote reference="Lorem ipsum dolor sit amet consectetur">
              Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
            </Quote>
          </Item>
          <Item type={CommentType.Replied}>
            <Quote reference="Lorem ipsum dolor sit amet consectetur">
              Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
            </Quote>
          </Item>
          <Item type={CommentType.Replied}>
            <Quote reference="Lorem ipsum dolor sit amet consectetur">
              Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.
            </Quote>
          </Item>
          <Item type={CommentType.Replied}>
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
