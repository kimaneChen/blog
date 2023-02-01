import { FC, ReactNode } from 'react'
import classNames from 'classnames'

export enum Variant {
  Primary,
  Dark,
  Background,
}

interface Props {
  variant: Variant
  children: ReactNode
}

const Button: FC<Props> = ({ variant, children }) => {
  const classname = classNames(
    'h-12',
    'w-full',
    'rounded-md',
    variant === Variant.Primary && ['bg-background', 'text-primary'],
    variant === Variant.Background && ['bg-background', 'text-dark'],
    variant === Variant.Dark && ['bg-dark', 'text-background']
  )
  return (
    <button type="button" className={classname}>
      {children}
    </button>
  )
}

export default Button
