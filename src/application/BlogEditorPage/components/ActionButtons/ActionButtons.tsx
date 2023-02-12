import { FC, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import Button, { Variant } from '@/components/Button'
import { useSession } from 'next-auth/react'
import AddTitleModal from './components/AddTitleModal'

interface Props {
  onConfirmPublish: () => void
}

const ActionButtons: FC<Props> = ({ onConfirmPublish }) => {
  const { formState } = useFormContext()
  const { isValid } = formState
  const { data: session } = useSession()

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="flex justify-end gap-3 pt-6 pb-3">
        {session ? (
          <Button
            variant={Variant.Primary}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...(isValid
              ? {
                  type: 'submit',
                }
              : {
                  type: 'button',
                  onClick: () => setIsModalOpen(true),
                })}
          >
            Publish
          </Button>
        ) : (
          <Button onClick={() => window.open('/login?redirect_url=/close', '_blank')}>
            Log In to Publish
          </Button>
        )}

        <Button variant={Variant.Outline}>Close</Button>
      </div>
      {isModalOpen && (
        <AddTitleModal onClose={() => setIsModalOpen(false)} onConfirmPublish={onConfirmPublish} />
      )}
    </>
  )
}

export default ActionButtons
