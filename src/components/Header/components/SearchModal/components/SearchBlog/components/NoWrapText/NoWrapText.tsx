import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const NoWrapText: FC<Props> = ({ children }) => (
  <p className="whitespace-nowrap overflow-hidden text-ellipsis">{children}</p>
)

export default NoWrapText
