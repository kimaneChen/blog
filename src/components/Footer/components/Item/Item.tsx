import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Item: FC<Props> = ({ children }) => (
  <div className="flex justify-start items-center">{children}</div>
)

export default Item
