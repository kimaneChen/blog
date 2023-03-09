import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const ColumnWrapper: FC<Props> = ({ children }) => (
  <div className="flex flex-col gap-y-6 pt-6">{children}</div>
)

export default ColumnWrapper
