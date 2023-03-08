import { FC } from 'react'
import Image from 'next/image'
import newNotificationAlert from './assets/notification-alert.svg'
import notificationBell from './assets/notification-bell.svg'

const Notification: FC = () => (
  <div className="bg-background-variant rounded-full w-[30px] h-[30px] relative">
    <button type="button">
      <Image src={newNotificationAlert} alt="New Notification" className="absolute top-0 right-0" />
      <Image
        src={notificationBell}
        alt="Notifications"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </button>
  </div>
)

export default Notification
