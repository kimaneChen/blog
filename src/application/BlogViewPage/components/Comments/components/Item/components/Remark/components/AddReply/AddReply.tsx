import RemarkTextarea from '@/application/RemarkTextArea'
import Button, { Size, Variant } from '@/components/Button'
import { Reply } from '@/schemas/Reply'
import { FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import createReply from '@/apis/createReply'

interface Props {
  onClose: () => void
  to?: string | null
  commentId: Reply['commentId']
  replyToId: Reply['replyToId']
  onSuccess: () => void
}

const AddReply: FC<Props> = ({ onClose, to = null, commentId, replyToId, onSuccess }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { data: session } = useSession()
  const { handleSubmit, reset, formState, setFocus, register } = useForm<Pick<Reply, 'content'>>()
  const { isValid } = formState

  const onSubmit: SubmitHandler<Pick<Reply, 'content'>> = async (data) => {
    if (!session?.user?.email) {
      return
    }
    try {
      setIsLoading(true)
      await createReply({
        commentId,
        replyToId,
        ...data,
      })
      onSuccess()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
    reset()
    onClose()
    setIsLoading(false)
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
            isLoading={isLoading}
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
