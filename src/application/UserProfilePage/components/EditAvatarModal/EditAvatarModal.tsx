import { FC, useState } from 'react'
import { useSession } from 'next-auth/react'
import Modal from '@/components/Modal'
import Avatar from '@/components/Avatar'
import Actions from './components/Actions'

const EditAvatarModal: FC = () => {
  const { data: session } = useSession()
  const [image] = useState(session?.user?.image)

  return (
    <Modal enableCloseButton onClose={() => {}}>
      <h3 className="text-lg font-medium">Your Avatar</h3>
      <div className="text-center py-4">
        <Avatar src={image} width={320} height={320} />
      </div>
      <Actions />
    </Modal>
  )
}

export default EditAvatarModal
