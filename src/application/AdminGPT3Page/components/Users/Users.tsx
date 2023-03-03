import Button, { Variant } from '@/components/Button'
import User from '@/types/User'
import { FC, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useAskGPT3 from '../../hooks/useAskGPT3'
import AddUser from './components/AddUser'

interface GPT3User {
  id: string
  name: NonNullable<User['name']>
  email: NonNullable<User['email']>
  image: NonNullable<User['image']>
}

const Users: FC = () => {
  const { loading, data, askGPT3 } = useAskGPT3(`
    Can you give me 5 random full name in the following structure?
    string[]
  `)

  const users = useMemo<GPT3User[] | null>(() => {
    const result = data?.match(/(\[.*\])/gs)?.[0]

    if (!result) return null

    try {
      return JSON.parse(result).map((name: string) => {
        const [firstName, lastName] = name.split(' ')
        const email = `${firstName}.${lastName}@mel.fish`

        return {
          id: uuidv4(),
          name,
          email,
          image: `https://api.dicebear.com/5.x/fun-emoji/png?seed=${name}`,
        }
      })
    } catch (error) {
      return null
    }
  }, [data])

  return (
    <>
      <div>
        <Button disabled={loading} variant={Variant.Dark} onClick={askGPT3}>
          {loading ? 'Loading...' : 'Hi GPT3, Give me some users!'}
        </Button>
      </div>
      {data && (
        <textarea
          className="mt-12 w-full resize-none rounded-md p-2"
          rows={10}
          readOnly
          value={data}
        />
      )}
      {users && (
        <div className="mt-12">
          <div className="grid grid-cols-5 gap-12">
            {users.map((user: GPT3User) => (
              <AddUser key={user.id} name={user.name} email={user.email} image={user.image} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Users
