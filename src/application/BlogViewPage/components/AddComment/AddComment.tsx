import { FC, useState } from 'react'
import Button, { Size, Variant } from '@/components/Button'
import Avatar from '@/components/Avatar'
import classNames from 'classnames'
import { useSession } from 'next-auth/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import useSWRMutation from 'swr/mutation'
import createComment from '@/apis/createComment'
import router from 'next/router'
import { Comment } from '@/schemas/Comment'

const AddComment: FC = () => {
  const { data: session } = useSession()
  const [focused, setFocused] = useState(false)
  const { id: blogId } = router.query
  const COMMENTS_PER_PAGE = 5
  const { trigger } = useSWRMutation(
    `/api/blogs/${blogId}/comments?page=1&perPage=${COMMENTS_PER_PAGE}`,
    (_, { arg: data }) =>
      createComment({
        blogId,
        ...data,
      })
  )

  const { handleSubmit, reset, watch, register, formState } = useForm<Pick<Comment, 'content'>>()
  const content = watch('content')
  const { isValid } = formState
  const onSubmit: SubmitHandler<Pick<Comment, 'content'>> = async (data) => {
    if (!session) {
      return
    }
    try {
      const response = await trigger(data)
      if (response?.status === 200) {
        reset()
      }
    } catch (error) {
      // TODO: Error Handling
      // eslint-disable-next-line no-console
      console.log(error)
    }
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
            <Button variant={Variant.Dark} size={Size.Small} disabled={!isValid} type="submit">
              Comment
            </Button>
          </div>
        )}
      </form>
    </div>
  )
}

export default AddComment
