import { FC, useState } from 'react'
import Image from 'next/image'
import newNotificationAlert from './assets/notification-alert.svg'
import notificationBell from './assets/notification-bell.svg'
import NotificationModal from './components/NotificationModal'

const Notification: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div className="bg-background-variant rounded-full w-[30px] h-[30px] relative">
      <button type="button" onClick={() => setIsModalOpen(true)}>
        <Image
          src={newNotificationAlert}
          alt="New Notification"
          className="absolute top-0 right-0"
        />
        <Image
          src={notificationBell}
          alt="Notifications"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </button>
      {isModalOpen && <NotificationModal onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}
export default Notification
