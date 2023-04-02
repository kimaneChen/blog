import createComment from '@/apis/createComment'
import Avatar from '@/components/Avatar'
import { useSession } from 'next-auth/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import router from 'next/router'
import { Comment } from '@/schemas/Comment'
import RemarkTextarea from '@/application/RemarkTextArea'
import { FC, useState } from 'react'
import Button, { Size, Variant } from '@/components/Button'

interface Props {
  onSuccess: () => void
}

const AddComment: FC<Props> = ({ onSuccess }) => {
  const { data: session } = useSession()
  const [focused, setFocused] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { id: blogId } = router.query

  const { handleSubmit, reset, watch, formState, register } = useForm<Pick<Comment, 'content'>>()
  const content = watch('content')
  const { isValid } = formState

  const onSubmit: SubmitHandler<Pick<Comment, 'content'>> = async (data) => {
    if (!session || !blogId) {
      return
    }
    try {
      setIsLoading(true)

      await createComment({
        blogId: blogId as string,
        ...data,
      })
      reset()
      onSuccess()
    } catch (error) {
      // TODO: Error Handling
      // eslint-disable-next-line no-console
      console.log(error)
    }

    setIsLoading(false)
  }

  return (
    <div className="pt-12 pr-24 pb-[120px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-6 items-start ">
          <div className="py-0.5">
            <Avatar src={session?.user?.image} alt={session?.user?.name} width={40} height={40} />
          </div>
          <div className="border rounded-lg grow box-border">
            <RemarkTextarea
              className={!focused && !content && 'h-11'}
              placeholder="Start a discussion, not a fire. Post with kindness"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('content', { required: true })}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
          </div>
        </div>
        {(focused || content) && (
          <div className="my-4 flex justify-end">
            <Button
              isLoading={isLoading}
              variant={Variant.Dark}
              size={Size.Small}
              disabled={!isValid}
              type="submit"
            >
              Comment
            </Button>
          </div>
        )}
      </form>
    </div>
  )
}

export default AddComment
