import classNames from 'classnames'
import { FC, ReactNode } from 'react'

export enum Size {
  Default,
  Medium,
  Narrow,
}

export enum Space {
  Default,
  Small,
  None,
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
      size === Size.Default && ['md:max-w-container'],
      size === Size.Medium && ['min-w-[350px]', 'max-w-[600px]', 'md:max-w-medium'],
      size === Size.Narrow && 'max-w-narrow',
      space === Space.Default && ['px-6', 'md:px-9'],
      space === Space.Small && 'px-6',
      space === Space.None && ['px-5', 'xl:px-0'],
      'mx-auto',
      className
    )}
  >
    {children}
  </div>
)

export default Container
