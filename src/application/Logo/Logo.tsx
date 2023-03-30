import Image from 'next/image'
import Router from 'next/router'
import { FC } from 'react'
import logo from './assets/logo-chuck.svg'

const Logo: FC = () => (
  <Image
    src={logo}
    alt="Chuckroo"
    width={136}
    height={52}
    onClick={() => Router.push('/')}
    className="cursor-pointer"
  />
)

export default Logo
