import { FC, ReactNode } from 'react'
import Button, { Variant, Props as ButtonProps } from '@/components/Button'
import { RiLoader4Line } from 'react-icons/ri'

interface Props extends ButtonProps {
  icon: ReactNode
  children: ReactNode
  isLoading?: Boolean
}

const AuthButton: FC<Props> = ({ icon, isLoading = false, children, onClick }) => (
  <div className="mb-2">
    <Button onClick={onClick} variant={Variant.Dark} block>
      <div className="flex items-center gap-2 justify-center">
        {icon}
        {children}
        {isLoading && <RiLoader4Line className="rounded-full animate-spin" />}
      </div>
    </Button>
  </div>
)

export default AuthButton
