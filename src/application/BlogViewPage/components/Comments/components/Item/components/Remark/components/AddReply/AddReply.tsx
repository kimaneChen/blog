import RemarkTextarea from '@/application/RemarkTextArea'
import Button, { Size, Variant } from '@/components/Button'
import Reply from '@/types/Reply'
import { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Props {
  onClose: () => void
  to?: string | null
}

const AddReply: FC<Props> = ({ onClose, to = null }) => {
  const { handleSubmit, reset, formState, setFocus, register } = useForm<Pick<Reply, 'content'>>()
  const { isValid } = formState
  const onSubmit: SubmitHandler<Pick<Reply, 'content'>> = async () => {
    reset()
    onClose()
  }
  useEffect(() => {
    setFocus('content')
  }, [setFocus])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="py-3">
        <RemarkTextarea
          placeholder={to ? `Reply ${to}` : 'Type your reply here...'}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('content', { required: true })}
          onBlur={(event) => !event.target.value && onClose()}
        />
        <div className="text-end my-3">
          <Button
            size={Size.Small}
            disabled={!isValid}
            variant={Variant.OnBackground}
            className="text-sm"
            type="submit"
          >
            Comment
          </Button>
        </div>
      </div>
    </form>
  )
}

export default AddReply
