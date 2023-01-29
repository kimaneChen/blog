import { FC } from 'react'
import NavLink from './NavLink'
import Logo from './Logo'

const Header: FC = () => (
  <header className="bg-background border-b">
    <div className="mx-auto max-w-container h-16 flex justify-between items-center px-6 ">
      <Logo />
      <section className="flex gap-4">
        <NavLink label="Sign Up" value="/signup" outline />
        <NavLink label="Log In" value="/login" />
      </section>
    </div>
  </header>
)

export default Header
