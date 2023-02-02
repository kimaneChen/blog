import { FC, ReactNode } from 'react'
import classNames from 'classnames'

export enum Variant {
  Primary,
  Dark,
  Background,
  Blue,
  Outline,
}

interface Props {
  variant: Variant
  block?: boolean
  children: ReactNode
}

const Button: FC<Props> = ({ variant, block = false, children }) => {
  const classname = classNames(
    'h-12',
    'rounded-md',
    'px-4',
    variant === Variant.Primary && ['bg-background', 'text-primary'],
    variant === Variant.Background && ['bg-background', 'text-dark'],
    variant === Variant.Dark && ['bg-dark', 'text-background'],
    variant === Variant.Blue && ['bg-primary', 'text-white'],
    variant === Variant.Outline && ['border', 'border-outline', 'text-on-background'],
    block && ['block', 'w-full']
  )
  return (
    <button type="button" className={classname}>
      {children}
    </button>
  )
}

export default Button
