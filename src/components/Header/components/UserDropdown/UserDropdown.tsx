import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import navItems from '@/config/navItems'
import { v4 as uuidv4 } from 'uuid'
import Item from './components/Item'

const dropdownItems = [
  ...navItems,
  {
    id: uuidv4(),
    href: '/sign-out',
    label: 'Log Out',
  },
]

const UserDropdown: FC = () => {
  const router = useRouter()
  const [currentActive, setCurrentActive] = useState(router.pathname)

  return (
    <div
      className="w-[185px] absolute mt-3 right-0 py-3 bg-background rounded shadow-dropdown"
      onMouseEnter={() => setCurrentActive('')}
      onMouseLeave={() => setCurrentActive(router.pathname)}
    >
      <div className="flex flex-col gap-5">
        {dropdownItems.map(({ id, href, label }) => (
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
  )
}

export default UserDropdown
