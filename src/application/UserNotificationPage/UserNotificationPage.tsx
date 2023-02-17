import { NextPage } from 'next'
import UserLayout from '@/application/UserLayout'
import MarkAllReadButton from './components/MarkAllReadButton'
import Tag from './components/Badge'
import Item from './components/Item'
import MOCKNOTIFICATIONS from './Mocknotification'

const UserNotificationPage: NextPage = () => (
  <UserLayout>
    <div>
      <div className="my-4 flex justify-end">
        <MarkAllReadButton />
      </div>

      <div className="mt-30">
        <div>
          <div className="p-6 flex justify-start gap-5">
            <Tag notifications={2}>Blog</Tag>
            <Tag notifications={4} active>
              Comment
            </Tag>
          </div>
          <Item title={MOCKNOTIFICATIONS[0].title} responses={MOCKNOTIFICATIONS[0].responses} />
          <Item
            title={MOCKNOTIFICATIONS[1].title}
            inline={MOCKNOTIFICATIONS[1].inline}
            responses={MOCKNOTIFICATIONS[1].responses}
          />
        </div>
      </div>
    </div>
  </UserLayout>
)

export default UserNotificationPage
