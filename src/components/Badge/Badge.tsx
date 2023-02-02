import { FC, ReactNode } from 'react'

export interface Props {
  children: ReactNode
}

const Badge: FC<Props> = ({ children }) => (
  <div className="border bg-background-variant rounded py-1 px-1.5 text-on-background text-xs">
    {children}
  </div>
)
export default Badge
