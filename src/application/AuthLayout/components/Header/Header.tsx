import { FC } from 'react'
import Logo from '@/components/Logo'
import Tag from './components/Tag'

const Header: FC = () => (
  <div>
    <div className="text-2xl font-medium">
      <Logo />
    </div>
    <div className="text-on-background mb-4">
      <Tag />
    </div>
  </div>
)

export default Header
