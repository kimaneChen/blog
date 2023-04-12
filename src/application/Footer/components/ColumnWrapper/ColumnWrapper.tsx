import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const ColumnWrapper: FC<Props> = ({ children }) => (
  <div className="flex flex-col gap-y-3 md:gap-y-6 md:pt-6 w-32 md:w-auto">{children}</div>
)

export default ColumnWrapper
