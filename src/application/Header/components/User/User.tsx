import Avatar from '@/components/Avatar'
import Dropdown from '@/components/Dropdown'
import { useSession } from 'next-auth/react'
import { FC } from 'react'
import Logo from '@/application/Logo/Logo'
import Items from './components/Items'

const User: FC = () => {
  const { data: session } = useSession()

  if (!session?.user) {
    return null
  }

  return (
    <Dropdown
      toggle={<Avatar src={session.user.image} alt={session.user.name} width={30} height={30} />}
    >
      <div className="hidden md:block absolute right-0 w-[185px] mt-3 py-4 bg-background rounded shadow-dropdown z-10">
        <Items />
      </div>
      <div className="md:hidden">
        <div className="h-16 px-6 py-2">
          <Logo />
        </div>
        <section className="w-full z-50 min-h-screen py-7 px-6 text-sm ">
          <Items />
        </section>
      </div>
    </Dropdown>
  )
}

export default User
