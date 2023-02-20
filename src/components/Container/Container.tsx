import classNames from 'classnames'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const Container: FC<Props> = ({ children, className }) => (
  <div className={classNames('max-w-container', 'mx-auto', 'px-6', className)}>{children}</div>
)

export default Container
