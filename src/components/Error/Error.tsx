import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Error: FC<Props> = ({ children }) => (
  <div className="text-error mt-2 text-sm md:text-base">{children}</div>
)

export default Error
