import createBlog from '@/apis/admin/createBlog'
import Tag from '@/components/Tag'
import Button, { Size, Variant } from '@/components/Button'
import Blog from '@/types/Blog'
import User from '@/types/User'
import { useSession } from 'next-auth/react'
import { FC, useState } from 'react'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

interface Props {
  title: Blog['title']
  description: NonNullable<Blog['description']>
  tags: NonNullable<Blog['tags']>
}

const AddBlog: FC<Props> = ({ title, description, tags }) => {
  const [email, setEmail] = useState<string | undefined>()
  const [dirty, setDirty] = useState(false)

  const { trigger, isMutating } = useSWRMutation('/api/blogs', () => {
    if (!email) {
      return null
    }

    return createBlog(
      {
        title,
        description,
        tags: tags.map((tag) => tag.name),
      },
      email
    )
  })

  const { data: users } = useSWR('/api/admin/users?role=GPT3')
  const { data: session } = useSession()

  return (
    <div className="bg-background rounded-xl border p-4 mb-4">
      <div className="mb-1 text-lg">{title}</div>
      <div className="text-on-background text-sm mb-2">{description}</div>
      <div className="flex gap-1 mb-4">
        {tags.map((tag) => (
          <Tag key={tag.id}>{tag.name}</Tag>
        ))}
      </div>
      {!dirty && users && (
        <div className="flex gap-2 justify-between">
          <select
            className="border grow rounded-md"
            onChange={(event) => setEmail(event.target.value)}
          >
            <option>Please select a user</option>
            {[session?.user, ...users].map((user: User) => (
              <option key={user.id} value={user.email || undefined}>
                {user.name} ({user.email})
              </option>
            ))}
          </select>
          <Button
            variant={Variant.Outline}
            size={Size.Small}
            disabled={isMutating}
            onClick={async () => {
              await trigger()
              setDirty(true)
            }}
          >
            Add
          </Button>
        </div>
      )}
    </div>
  )
}

export default AddBlog
