import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Inline: FC<Props> = ({ children }) => (
  <div>
    <span className="bg-highlight px-1">{children}</span>
  </div>
)

export default Inline
