import createComment from '@/apis/createComment'
import createNotification from '@/apis/createNotification'
import Avatar from '@/components/Avatar'
import Button, { Size, Variant } from '@/components/Button'
import { Comment } from '@/schemas/Comment'
import classNames from 'classnames'
import { useSession } from 'next-auth/react'
import router from 'next/router'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Props {
  onSuccess: () => void
}

const AddComment: FC<Props> = ({ onSuccess }) => {
  const { data: session } = useSession()
  const [focused, setFocused] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { id: blogId } = router.query

  const { handleSubmit, reset, watch, register, formState } = useForm<Pick<Comment, 'content'>>()
  const { isValid } = formState
  const content = watch('content')

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

      await createNotification({
        blogId: blogId as string,
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
    <div className="pt-12  pr-24">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-6 items-start">
          <div className="py-0.5">
            <Avatar src={session?.user?.image} alt={session?.user?.name} width={40} height={40} />
          </div>
          <div className="border rounded-lg grow box-border">
            <textarea
              className={classNames(
                'text-sm',
                'focus:outline-none',
                'py-3',
                'leading-6',
                'px-4',
                'w-full',
                'overflow-hidden',
                'block',
                'resize-none',
                focused || content ? 'h-[90px]' : 'h-11'
              )}
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
