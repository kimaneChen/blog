import { FC, useState } from 'react'
import navItems from '@/config/navItems'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import Item from './components/Item'

const Items: FC = () => {
  const router = useRouter()
  const [currentActive, setCurrentActive] = useState(router.pathname)

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => setCurrentActive('')}
      onMouseLeave={() => setCurrentActive(router.pathname)}
    >
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
  )
}

export default Items
