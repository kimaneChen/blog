import Avatar from '@/components/Avatar'
import Dropdown from '@/components/Dropdown'
import navItems from '@/config/navItems'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Item from './components/Item'

const Header: FC = () => {
  const { data: session } = useSession()
  const router = useRouter()
  const [currentActive, setCurrentActive] = useState(router.pathname)

  if (!session?.user) return null

  return (
    <Dropdown
      toggle={<Avatar src={session.user?.image} alt={session.user?.name} width={30} height={30} />}
    >
      <div
        className="absolute right-0 w-[185px] mt-3 py-3 bg-background rounded shadow-dropdown"
        onMouseEnter={() => setCurrentActive('')}
        onMouseLeave={() => setCurrentActive(router.pathname)}
      >
        <div className="flex flex-col gap-5">
          {[
            ...navItems,
            {
              id: uuidv4(),
              href: '/sign-out',
              label: 'Log Out',
            },
          ].map(({ id, href, label }) => (
            <Item
              key={id}
              href={href}
              label={label}
              active={currentActive === href}
              onMouseEnter={() => setCurrentActive(href)}
            />
          ))}
        </div>
      </div>
    </Dropdown>
  )
}

export default Header
