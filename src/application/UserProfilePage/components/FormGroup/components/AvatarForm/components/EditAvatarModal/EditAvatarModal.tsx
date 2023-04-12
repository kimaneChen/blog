import { FC } from 'react'
import { useSession } from 'next-auth/react'
import Modal from '@/components/Modal'
import Avatar from '@/components/Avatar'
import Actions from './components/Actions'

interface Props {
  onClose: () => void
}

const EditAvatarModal: FC<Props> = ({ onClose }) => {
  const { data: session } = useSession()

  if (!session?.user) {
    return null
  }

  return (
    <Modal enableCloseButton onClose={onClose}>
      <h3 className="text-lg font-medium">Your Avatar</h3>
      <div className="text-center py-4">
        <Avatar src={session.user.image} alt={session.user.name} width={320} height={320} />
      </div>
      <Actions />
    </Modal>
  )
}

export default EditAvatarModal
