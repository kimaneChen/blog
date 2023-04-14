import { FC } from 'react'
import { useRouter } from 'next/router'
import { useNotification } from '@/context/NotificationContext'
import navItems from '@/config/navItems'
import LocalStorage from '@/config/LocalStorage/LocalStorage'
import classNames from 'classnames'
import Container from '@/components/Container'
import NavLink from './components/NavLink'

const Navigation: FC = () => {
  const router = useRouter()
  const { message } = useNotification()

  return (
    <Container>
      <nav
        className={classNames(
          'flex',
          'gap-5',
          'md:gap-14',
          'w-[880px]',
          'pt-5',
          'md:h-auto',
          message === LocalStorage.AuthSuccessMessage && ['h-40']
        )}
      >
        {navItems.map(({ id, href, label, icon }) => (
          <NavLink key={id} href={href} active={router.pathname === href}>
            {icon}
            {label}
          </NavLink>
        ))}
      </nav>
    </Container>
  )
}

export default Navigation
