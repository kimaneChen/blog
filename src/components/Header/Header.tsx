import { Variant } from '@/components/Button'
import Container from '@/components/Container'
import Input from '@/components/Input'
import Logo from '@/components/Logo'
import { useSession } from 'next-auth/react'
import { FC } from 'react'
import { Size } from '../Input/Input'
import NavLink from './components/NavLink'
import Notification from './components/Notification'
import User from './components/User'

const Header: FC = () => {
  const { data: session } = useSession()

  return (
    <header className="bg-background border-b">
      <Container className="flex justify-between items-center h-16 relative">
        <Logo />

        <div className="absolute text-center h-8 w-[200px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <Input size={Size.Small} className="text-center" placeholder="Search..." />
        </div>

        {session ? (
          <section className="flex gap-2.5">
            <Notification />
            <User />
          </section>
        ) : (
          <section className="flex gap-4">
            <NavLink href="/login">Log In</NavLink>
            <NavLink href="/sign-up" variant={Variant.Dark}>
              Sign Up
            </NavLink>
          </section>
        )}
      </Container>
    </header>
  )
}

export default Header
