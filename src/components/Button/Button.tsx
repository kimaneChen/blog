import { FC, HTMLProps, ReactNode } from 'react'
import classNames from 'classnames'

export enum Variant {
  Default,
  Primary,
  Warn,
  Error,
  Dark,
  Outline,
  Background,
}

export enum Size {
  Normal,
  Small,
}

export interface Props extends HTMLProps<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  block?: boolean
  children: ReactNode
  type?: 'submit' | 'button' | 'reset' | undefined
}

const Button: FC<Props> = ({
  variant = Variant.Default,
  size = Size.Normal,
  block = false,
  children,
  type = 'button',
  className,
  ...props
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={classNames(
      'disabled:opacity-50',
      'disabled:grayscale',
      'disabled:cursor-not-allowed',
      variant === Variant.Default && ['bg-background', 'text-primary'],
      variant === Variant.Primary && ['bg-primary', 'text-on-primary'],
      variant === Variant.Warn && ['bg-warn', 'text-on-warn'],
      variant === Variant.Error && ['bg-error', 'text-on-error'],
      variant === Variant.Background && ['bg-background', 'text-dark'],
      variant === Variant.Dark && ['bg-dark', 'text-background'],
      variant === Variant.Outline && ['border', 'border-outline', 'text-on-background'],
      size === Size.Normal && ['h-12', 'rounded-md', 'px-4'],
      size === Size.Small && ['h-8', 'rounded-md', 'px-4'],
      block && ['block', 'w-full'],
      className
    )}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {children}
  </button>
)

export default Button
