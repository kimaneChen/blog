import { FC, ReactNode } from 'react'
import Button, { Variant, Props as ButtonProps } from '@/components/Button'

interface Props extends ButtonProps {
  icon: ReactNode
  children: ReactNode
}

const AuthButton: FC<Props> = ({ icon, children, onClick }) => (
  <div className="mb-2">
    <Button onClick={onClick} variant={Variant.Dark} block>
      <div className="flex items-center gap-2 justify-center">
        {icon}
        {children}
      </div>
    </Button>
  </div>
)

export default AuthButton
