import createUser from '@/apis/admin/createUser'
import Button, { Size, Variant } from '@/components/Button'
import User from '@/types/User'
import Image from 'next/image'
import { FC } from 'react'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

interface Props {
  name: NonNullable<User['name']>
  email: NonNullable<User['email']>
  image: NonNullable<User['image']>
}

const AddUser: FC<Props> = ({ name, email, image }) => {
  const { trigger, isMutating } = useSWRMutation('/api/admin/users', () =>
    createUser({
      name,
      email,
      image,
      role: 'GPT3',
    })
  )

  const { data, mutate } = useSWR('/api/admin/users?role=GPT3')

  return (
    <div>
      <div className="flex items-center">
        <Image width={50} height={50} className="rounded-full" src={image} alt={name} />
        <div className="ml-4">
          <div className="text-lg text-on-background">{name}</div>
          <div className="text-sm text-placeholder">{email}</div>
        </div>
      </div>
      {!data?.find((user: any) => user.email === email) && (
        <div className="mt-2">
          <Button
            block
            disabled={isMutating}
            variant={Variant.Outline}
            size={Size.Small}
            onClick={async () => {
              await trigger()
              mutate()
            }}
          >
            Add
          </Button>
        </div>
      )}
    </div>
  )
}

export default AddUser
