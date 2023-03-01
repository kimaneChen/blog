import { FC } from 'react'
import Logo from '@/components/Logo'
import Signature from '@/components/Signature'

const Header: FC = () => (
  <div>
    <div className="text-2xl font-medium">
      <Logo />
    </div>
    <div className="text-on-background mb-4">
      <Signature />
    </div>
  </div>
)

export default Header
