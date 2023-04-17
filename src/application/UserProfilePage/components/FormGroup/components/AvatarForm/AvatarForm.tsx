import { FC, useState } from 'react'
import Avatar from '@/components/Avatar'
import { useSession } from 'next-auth/react'
import EditAvatarModal from './components/EditAvatarModal'

const AvatarForm: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data: session } = useSession()

  return (
    <>
      <div className="flex gap-4">
        <div className="grow">
          <h2 className="text-2xl font-medium mb-4">Your Avatar</h2>
          <p className="text-on-background">
            Click on the avatar to upload a custom one from your files.
          </p>
        </div>
        <button
          aria-label="Upload avatar"
          type="button"
          className="w-[72px] h-[72px] bg-outline rounded-full shrink-0"
          onClick={() => setIsModalOpen(true)}
        >
          <Avatar src={session?.user?.image} alt={session?.user?.name} width={72} height={72} />
        </button>
      </div>
      {isModalOpen && <EditAvatarModal onClose={() => setIsModalOpen(false)} />}
    </>
  )
}

export default AvatarForm
