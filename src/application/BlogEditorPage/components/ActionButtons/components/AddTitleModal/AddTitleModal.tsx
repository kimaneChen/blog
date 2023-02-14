import { FC } from 'react'
import Button, { Size, Variant } from '@/components/Button'
import { useFormContext } from 'react-hook-form'
import Modal from '@/components/Modal'

interface Props {
  onClose: () => void
  onConfirmPublish: () => void
}

const AddTitleModal: FC<Props> = ({ onClose, onConfirmPublish }) => {
  const { setValue, formState } = useFormContext()
  const { isValid } = formState

  return (
    <Modal onClose={onClose}>
      <div className="text-2xl font-bold">This blog needs a title</div>
      <div className="text-sm text-on-background my-3">
        You need to add a title to this page to publish it
      </div>
      <input
        placeholder="Input page title here"
        className="px-4 py-3 border rounded w-full focus:outline-none"
        onChange={(e) => setValue('title', e.target.value, { shouldValidate: true })}
      />
      <div className="mt-3 flex gap-4 justify-end pt-3">
        <Button variant={Variant.Outline} size={Size.Small} onClick={onClose}>
          Close
        </Button>
        <Button
          variant={Variant.Dark}
          disabled={!isValid}
          size={Size.Small}
          onClick={() => {
            onConfirmPublish()
            onClose()
          }}
        >
          Publish
        </Button>
      </div>
    </Modal>
  )
}

export default AddTitleModal
