import classNames from 'classnames'
import { FC, ReactNode } from 'react'

export enum Size {
  Default = 'max-w-container px-6',
  Narrow = 'max-w-narrow',
}

interface Props {
  children: ReactNode
  className?: string
  size?: Size
}

const Container: FC<Props> = ({ size = Size.Default, children, className }) => (
  <div className={classNames(size, 'mx-auto', className)}>{children}</div>
)

export default Container
