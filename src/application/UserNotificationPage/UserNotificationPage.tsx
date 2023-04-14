import UserLayout from '@/application/UserLayout'
import { useRouter } from 'next/router'
import Button, { Size, Variant } from '@/components/Button'
import classNames from 'classnames'
import { NextPage } from 'next'
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
      {tab === Tabs.Blogs && <CommentNotifications />}
      {tab === Tabs.Comments && <ReplyNotifications />}
    </UserLayout>
  )
}

export default UserNotificationPage
