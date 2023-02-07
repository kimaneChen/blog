import { FC, HTMLProps, ReactNode } from 'react'
import classNames from 'classnames'

export enum Variant {
  Primary,
  Secondary,
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
  variant = Variant.Primary,
  block = false,
  children,
  type = 'button',
  ...props
}) => {
  const classname = classNames(
    'h-12',
    'rounded-md',
    'px-4',
    'disabled:opacity-50',
    'disabled:grayscale',
    'disabled:cursor-not-allowed',
    variant === Variant.Primary && ['bg-background', 'text-primary'],
    variant === Variant.Secondary && ['bg-primary', 'text-on-primary'],
    variant === Variant.Background && ['bg-background', 'text-dark'],
    variant === Variant.Dark && ['bg-dark', 'text-background'],
    variant === Variant.Outline && ['border', 'border-outline', 'text-on-background'],
    block && ['block', 'w-full']
  )
  return (
    // eslint-disable-next-line react/button-has-type, react/jsx-props-no-spreading
    <button type={type} className={classname} {...props}>
      {children}
    </button>
  )
}

export default Button
