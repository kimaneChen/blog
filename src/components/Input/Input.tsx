/* eslint-disable react/require-default-props */
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

export enum Size {
  Small = 'Small',
  Medium = 'Medium',
  Normal = 'Normal',
  Large = 'Large',
}

export interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  prefix?: ReactNode
  suffix?: ReactNode
  size?: Size
  className?: string
  error?: boolean
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      prefix = undefined,
      suffix = undefined,
      className = undefined,
      size = Size.Normal,
      error = undefined,
      ...props
    },
    ref
  ) => (
    <div className={classNames({ relative: prefix || suffix })}>
      {prefix && <div className="absolute top-0 bottom-0 flex items-center left-3">{prefix}</div>}
      <input
        ref={ref}
        className={classNames(
          'w-full',
          'border',
          'rounded-md',
          size === Size.Normal && ['h-12', 'px-4'],
          size === Size.Small && ['h-8', 'px-4'],
          size === Size.Medium && ['h-10', 'px-4'],
          size === Size.Large && ['h-14', 'px-6'],
          prefix && 'pl-9',
          suffix && 'pr-9',
          error && ['border-error', 'focus:outline-none'],
          className
        )}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      {suffix && <div className="absolute top-0 bottom-0 flex items-center right-3">{suffix}</div>}
    </div>
  )
)

Input.displayName = 'Input'

export default Input
