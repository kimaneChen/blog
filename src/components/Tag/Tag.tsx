import { FC, ReactNode } from 'react'
import classNames from 'classnames'

export enum Variant {
  White,
  Background,
}

interface Props {
  children: ReactNode
  variant?: Variant
}

const Tag: FC<Props> = ({ children, variant = Variant.Background }) => {
  const classname = classNames(
    'border',
    'rounded',
    'py-1',
    'px-2',
    'text-xs',
    variant === Variant.Background && ['bg-background-variant', 'text-on-background'],
    variant === Variant.White && 'text-on-background'
  )
  return <div className={classname}>{children}</div>
}
export default Tag
