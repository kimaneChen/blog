import { FC } from 'react'
import { useRouter } from 'next/router'
import Container from '@/components/Container'
import navItems from '@/config/navItems'
import NavLink from './components/NavLink'

const Navigation: FC = () => {
  const router = useRouter()

  return (
    <Container>
      <nav className="flex gap-14 w-[880px] pt-5">
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
