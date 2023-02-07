import { FC, HTMLProps, ReactNode } from 'react'
import classNames from 'classnames'

export enum Variant {
  Default,
  Primary,
  Dark,
  Outline,
  Background,
}

export interface Props extends HTMLProps<HTMLButtonElement> {
  variant?: Variant
  block?: boolean
  children: ReactNode
  type?: 'submit' | 'button' | 'reset' | undefined
}

const Button: FC<Props> = ({
  variant = Variant.Default,
  block = false,
  children,
  type = 'button',
  ...props
}) => {
  const className = classNames(
    'h-12',
    'rounded-md',
    'px-4',
    'disabled:opacity-50',
    'disabled:grayscale',
    'disabled:cursor-not-allowed',
    variant === Variant.Default && ['bg-background', 'text-primary'],
    variant === Variant.Primary && ['bg-primary', 'text-on-primary'],
    variant === Variant.Background && ['bg-background', 'text-dark'],
    variant === Variant.Dark && ['bg-dark', 'text-background'],
    variant === Variant.Outline && ['border', 'border-outline', 'text-on-background'],
    block && ['block', 'w-full']
  )
  return (
    // eslint-disable-next-line react/button-has-type, react/jsx-props-no-spreading
    <button type={type} className={className} {...props}>
      {children}
    </button>
  )
}

export default Button
