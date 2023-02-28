import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Container: FC<Props> = ({ children }) => (
  <div className="max-w-[1040px] mx-auto">{children}</div>
)

export default Container
