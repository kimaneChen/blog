import { FC, useState, useRef } from 'react'
import { useSession } from 'next-auth/react'
import { Variant } from '@/components/Button'
import Avatar from '@/components/Avatar'
import Container from '@/components/Container'
import Logo from '@/components/Logo'
import Input from '@/components/Input'
import useClickOutside from '@/hooks/useClickOutside'
import NavLink from './components/NavLink'
import Notification from './components/Notification'
import UserDropdown from './components/UserDropdown'
import { Size } from '../Input/Input'

const Header: FC = () => {
  const { data: session } = useSession()
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useClickOutside(ref, () => setIsUserDropdownOpen(false))

  return (
    <header className="bg-background border-b">
      <Container className="flex justify-between items-center h-16 px-6 relative">
        <Logo />

        <div className="absolute text-center h-8 w-[200px] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <Input size={Size.Small} className="text-center" placeholder="Search..." />
        </div>

        {session ? (
          <section className="flex gap-2.5">
            <Notification />

            <div className="relative" ref={ref}>
              <button type="button" onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}>
                <Avatar src={session.user?.image} alt={session.user?.name} width={30} height={30} />
              </button>
              {isUserDropdownOpen && <UserDropdown />}
            </div>
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
