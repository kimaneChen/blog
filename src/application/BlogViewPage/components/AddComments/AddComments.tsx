import { FC, useState } from 'react'
import Button, { Size, Variant } from '@/components/Button'
import Avatar from '@/components/Avatar'
import classNames from 'classnames'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'

const AddComments: FC = () => {
  const { data: session } = useSession()
  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm()
  const [focused, setFocused] = useState(false)

  return (
    <div className="pt-12  pr-24">
      <form onSubmit={handleSubmit(() => {})}>
        <div className="py-0.5 flex gap-6 items-center">
          <div>
            <Avatar src={session?.user?.image} alt={session?.user?.name} width={40} height={40} />
          </div>
          <div className="border rounded-lg grow py-0 my-0">
            <textarea
              className={classNames(
                'text-sm',
                'focus:outline-none',
                'py-3',
                'px-4',
                'w-full',
                'overflow-hidden',
                'resize-none',
                focused || isDirty ? 'h-24' : 'h-11'
              )}
              placeholder="Start a discussion, not a fire. Post with kindness"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('comment')}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
          </div>
        </div>
        {(focused || isDirty) && (
          <div className="my-4 flex justify-end">
            <Button variant={Variant.Dark} size={Size.Small} disabled={!isDirty} type="submit">
              Comment
            </Button>
          </div>
        )}
      </form>
      <div className="my-4 flex items-center justify-end gap-1">
        <Avatar src={session?.user?.image} alt={session?.user?.name} width={16} height={16} />
        <Avatar src={session?.user?.image} alt={session?.user?.name} width={16} height={16} />
        <Avatar src={session?.user?.image} alt={session?.user?.name} width={16} height={16} />
        <Avatar src={session?.user?.image} alt={session?.user?.name} width={16} height={16} />
        <Avatar src={session?.user?.image} alt={session?.user?.name} width={16} height={16} />
        <Avatar src={session?.user?.image} alt={session?.user?.name} width={16} height={16} />
      </div>
    </div>
  )
}

export default AddComments
