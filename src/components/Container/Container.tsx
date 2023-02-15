import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const Container: FC<Props> = ({ children, className }) => (
  <div className={`w-container mx-auto ${className}`}>{children}</div>
)

export default Container
