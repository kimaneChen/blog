import classNames from 'classnames'
import { FC, ReactNode } from 'react'

export enum Size {
  Default,
  Narrow,
}

export enum Space {
  Default,
  Small,
}

interface Props {
  children: ReactNode
  className?: string
  size?: Size
  space?: Space
}

const Container: FC<Props> = ({
  size = Size.Default,
  space = Space.Default,
  children,
  className = undefined,
}) => (
  <div
    className={classNames(
      size === Size.Default && 'max-w-container',
      size === Size.Narrow && 'max-w-narrow',
      space === Space.Default && 'px-9',
      space === Space.Small && 'px-6',
      'mx-auto',
      className
    )}
  >
    {children}
  </div>
)

export default Container
