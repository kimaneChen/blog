import { FC } from 'react'
import Button, { Size, Variant } from '@/components/Button'
import Avatar from '@/components/Avatar'
import { useSession } from 'next-auth/react'

const AddComments: FC = () => {
  const { data: session } = useSession()
  return (
    <div className="py-12 pr-75 pl-52 pr-72">
      <div className="h-12 flex items-center gap-6">
        <Avatar src={session?.user?.image} alt={session?.user?.name} width={40} height={40} />
        <div className="border rounded-lg py-3 px-4 w-full h-12">
          <textarea
            className="text-sm h-5  w-full focus:outline-none"
            placeholder="Start a discussion, not a fire. Post with kindness"
          />
        </div>
      </div>
      <div className="my-4 flex justify-end">
        <Button variant={Variant.Dark} size={Size.Small} disabled>
          Comment
        </Button>
      </div>
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
