import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const ColumnWrapper: FC<Props> = ({ children }) => (
  <div className="flex flex-col gap-y-3 md:gap-y-6 pt-8 md:pt-6">{children}</div>
)

export default ColumnWrapper
