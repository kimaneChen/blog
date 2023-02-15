import { FC } from 'react'
import { useRouter } from 'next/router'
import Button, { Variant, Size } from '@/components/Button'
import Modal from '@/components/Modal'

interface Props {
  onClose: () => void
}

const BeforeCloseModal: FC<Props> = ({ onClose }) => {
  const router = useRouter()

  return (
    <Modal onClose={onClose}>
      <p className="text-lg text-center pt-10 mb-10">
        Your content hasn&apos;t been published, are you sure to close?
      </p>
      <div className="flex justify-end gap-4">
        <Button onClick={onClose} size={Size.Small} variant={Variant.Outline}>
          No
        </Button>
        <Button onClick={() => router.push('/')} size={Size.Small} variant={Variant.Dark}>
          Yes
        </Button>
      </div>
    </Modal>
  )
}

export default BeforeCloseModal
