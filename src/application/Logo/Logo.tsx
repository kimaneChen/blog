import Image from 'next/image'
import Router from 'next/router'
import { FC } from 'react'
import logo from './assets/logo-chuck.svg'

const Logo: FC = () => (
  <section className="flex gap-3">
    <Image
      src={logo}
      alt="ChuckRoo"
      width={136}
      height={52}
      onClick={() => Router.push('/')}
      className="cursor-pointer"
    />
  </section>
)

export default Logo
