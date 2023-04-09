import { FC } from 'react'
import Cover from '@/components/Cover'
import Container, { Space } from '@/components/Container'
import Logo from '@/application/Logo'
import { IoClose } from 'react-icons/io5'
import NavLink, { Variant } from '../NavLink'

interface Props {
  onClose: () => void
}

const MobileMenu: FC<Props> = ({ onClose }) => (
  <Cover className="md:hidden">
    <Container className="flex justify-between items-center h-16 relative" space={Space.Small}>
      <Logo />
      <button type="button" className="text-2xl text-center" onClick={onClose}>
        <IoClose />
      </button>
    </Container>
    <section className="w-full z-50 min-h-screen py-7 px-6 text-sm md:hidden">
      <div className="mb-6">
        <NavLink href="/login" variant={Variant.Border}>
          Log In
        </NavLink>
      </div>
      <NavLink href="/sign-up" variant={Variant.Dark}>
        Sign Up
      </NavLink>
    </section>
  </Cover>
)

export default MobileMenu
