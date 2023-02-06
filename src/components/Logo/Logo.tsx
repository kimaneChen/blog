import Image from 'next/image'
import { FC } from 'react'
import logo from './assets/logo-chuck.svg'

const Logo: FC = () => (
  <section className="flex gap-3">
    <Image src={logo} alt="ChuckRoo" width={136} height={52} />
  </section>
)

export default Logo
