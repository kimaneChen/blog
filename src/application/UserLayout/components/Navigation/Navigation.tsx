import { FC } from 'react'
import { useRouter } from 'next/router'
import Container from '@/components/Container'
import navItems from '@/config/navItems'
import NavLink from './components/NavLink'

const Navigation: FC = () => {
  const router = useRouter()

  return (
    <Container className="flex justify-between items-center">
      <nav className="flex gap-16">
        {navItems.map(({ id, href, label }) => (
          <NavLink key={id} href={href} active={router.pathname === href}>
            {label}
          </NavLink>
        ))}
      </nav>
    </Container>
  )
}

export default Navigation
