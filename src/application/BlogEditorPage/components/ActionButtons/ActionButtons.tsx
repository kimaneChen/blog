import { FC, useState, MouseEvent } from 'react'
import { useRouter } from 'next/router'
import { useFormContext } from 'react-hook-form'
import Button, { Variant } from '@/components/Button'
import { useSession } from 'next-auth/react'
import AddTitleModal from './components/AddTitleModal'
import BeforeCloseModal from './components/BeforeCloseModal'

interface Props {
  onConfirmPublish: () => void
  isLoading: boolean
}

enum ConfirmationModal {
  BeforeClose,
  AddTitle,
}

const ActionButtons: FC<Props> = ({ onConfirmPublish, isLoading }) => {
  const { formState } = useFormContext()
  const { isDirty, isValid } = formState
  const { data: session } = useSession()

  const [modal, setModal] = useState<ConfirmationModal | null>(null)

  const router = useRouter()
  const handleClose = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()

    if (isDirty) {
      setModal(ConfirmationModal.BeforeClose)
    } else {
      router.push('/')
    }
  }

  return (
    <>
      <div className="flex justify-end gap-3 pt-6 pb-3">
        {session ? (
          <Button
            variant={Variant.Primary}
            isLoading={isLoading}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...(isValid
              ? {
                  type: 'submit',
                }
              : {
                  type: 'button',
                  onClick: () => setModal(ConfirmationModal.AddTitle),
                })}
          >
            Publish
          </Button>
        ) : (
          <Button onClick={() => window.open('/login?redirect_url=/close', '_blank')}>
            Log In to Publish
          </Button>
        )}
        <Button onClick={handleClose} variant={Variant.Outline}>
          Close
        </Button>
      </div>
      {modal === ConfirmationModal.AddTitle && (
        <AddTitleModal onClose={() => setModal(null)} onConfirmPublish={onConfirmPublish} />
      )}
      {modal === ConfirmationModal.BeforeClose && (
        <BeforeCloseModal onClose={() => setModal(null)} />
      )}
    </>
  )
}

export default ActionButtons
