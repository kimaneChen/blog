import { FC, useState } from 'react'
import Button, { Size, Variant } from '@/components/Button'
import Avatar from '@/components/Avatar'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'

const AddComments: FC = () => {
  const { data: session } = useSession()
  const { register, handleSubmit, watch } = useForm()
  const [focused, setFocused] = useState(false)

  const watchComment = watch('comment')

  return (
    <div className="py-12 pl-[200px] pr-72">
      <form onSubmit={handleSubmit(() => {})}>
        <div className="flex items gap-6">
          <div>
            <Avatar src={session?.user?.image} alt={session?.user?.name} width={40} height={40} />
          </div>
          <div className="border rounded-lg py-3 px-4 w-full">
            <textarea
              className={`text-sm ${
                focused || watchComment ? 'h-24' : 'h-5'
              } w-full focus:outline-none`}
              placeholder="Start a discussion, not a fire. Post with kindness"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register('comment')}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
          </div>
        </div>
        <div className="my-4 flex justify-end">
          {(focused || watchComment) && (
            <Button variant={Variant.Dark} size={Size.Small} disabled={!watchComment} type="submit">
              Comment
            </Button>
          )}
        </div>
      </form>
      <div className="my-4 flex items-center justify-end  gap-1 ">
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
