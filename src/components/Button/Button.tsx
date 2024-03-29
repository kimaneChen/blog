import { FC, HTMLProps, ReactNode } from 'react'
import classNames from 'classnames'
import { AiOutlineLoading } from 'react-icons/ai'

export enum Variant {
  Default,
  Primary,
  Warn,
  Error,
  Dark,
  Outline,
  Background,
  BackgroundVariant,
  OnBackground,
}

export enum Size {
  Normal,
  Medium,
  Small,
  XSmall,
  XXSmall,
  Large,
}

export interface Props extends HTMLProps<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  block?: boolean
  children: ReactNode
  type?: 'submit' | 'button' | 'reset' | undefined
  isLoading?: boolean
}

const Button: FC<Props> = ({
  variant = Variant.Default,
  size = Size.Normal,
  block = false,
  children,
  type = 'button',
  className,
  isLoading = false,
  ...props
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={classNames(
      'disabled:opacity-20',
      'disabled:grayscale',
      'disabled:cursor-not-allowed',
      'rounded-md',
      'px-4',
      variant === Variant.Default && ['bg-background', 'text-on-background'],
      variant === Variant.Primary && ['bg-primary', 'text-on-primary'],
      variant === Variant.Warn && ['bg-warn', 'text-on-warn'],
      variant === Variant.Error && ['bg-error', 'text-on-error'],
      variant === Variant.Background && ['bg-background', 'text-dark'],
      variant === Variant.OnBackground && ['bg-dark', 'text-background-variant'],
      variant === Variant.Dark && ['bg-dark', 'text-background'],
      variant === Variant.Outline && ['border', 'border-outline', 'text-on-background'],
      variant === Variant.BackgroundVariant && ['bg-background-variant', 'text-on-background'],
      size === Size.XSmall && ['h-[22px]', 'px-3'],
      size === Size.Small && ['h-8', 'px-3'],
      size === Size.Medium && ['h-10'],
      size === Size.Normal && ['h-12'],
      size === Size.Large && ['h-14', 'text-lg'],
      block && ['block', 'w-full'],
      className
    )}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {children} {isLoading && <AiOutlineLoading className="animate-spin inline-block ml-1" />}
  </button>
)

export default Button
