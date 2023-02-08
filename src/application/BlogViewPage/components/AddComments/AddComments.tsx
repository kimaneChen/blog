import { FC } from 'react'
import Button, { Size, Variant } from '@/components/Button'
import Avatar from '@/components/Avatar'
import { useSession } from 'next-auth/react'

const AddComments: FC = () => {
  const { data: session } = useSession()
  return (
    <div className="grid grid-cols-12">
      <div className="flex items-center justify-center py-2 px-5">
        <Avatar src={session?.user?.image} alt={session?.user?.name} width={40} height={40} />
      </div>
      <div className="relative col-span-11">
        <textarea
          className="w-full h-20 focus:outline-none"
          placeholder="Start a discussion, not a fire. Post with kindness"
        />
        <div className="absolute bottom-4 right-6">
          <Button variant={Variant.Dark} size={Size.Small}>
            Comment
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AddComments
