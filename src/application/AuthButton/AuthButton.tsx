import { FC, ReactNode } from 'react'
import Button, { Variant, Props as ButtonProps } from '@/components/Button'

interface Props extends ButtonProps {
  icon: ReactNode
  children: ReactNode
  isLoading?: boolean
}

const AuthButton: FC<Props> = ({ icon, isLoading = false, children, onClick }) => (
  <div className="mb-2">
    <Button
      onClick={onClick}
      variant={Variant.Dark}
      block
      isLoading={isLoading}
      className="flex items-center gap-2 justify-center"
    >
      {icon}
      {children}
    </Button>
  </div>
)

export default AuthButton
