import { FC } from 'react'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'
import Container from '@/components/Container'
import NavLink from './components/NavLink'

const navLinks = [
  {
    id: uuidv4(),
    href: '/user/my-blogs',
    label: 'MyBlogs',
  },
  {
    id: uuidv4(),
    href: '/user/notification',
    label: 'Notification',
  },
  {
    id: uuidv4(),
    href: '/user/comments',
    label: 'Comments',
  },
  {
    id: uuidv4(),
    href: '/user/settings',
    label: 'Settings',
  },
]

const Navigation: FC = () => {
  const router = useRouter()

  return (
    <Container className="flex justify-between items-center">
      <nav className="flex gap-16">
        {navLinks.map(({ id, href, label }) => (
          <NavLink key={id} href={href} active={router.pathname === href}>
            {label}
          </NavLink>
        ))}
      </nav>
    </Container>
  )
}

export default Navigation
