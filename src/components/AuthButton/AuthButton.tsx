import { FC, ReactNode } from 'react'
import Button, { Variant } from '@/components/Button'

interface Props {
  icon: ReactNode
  children: ReactNode
}

const AuthButton: FC<Props> = ({ icon, children }) => (
  <Button variant={Variant.Dark} block>
    <div className="flex items-center gap-2 justify-center">
      {icon}
      {children}
    </div>
  </Button>
)

export default AuthButton
