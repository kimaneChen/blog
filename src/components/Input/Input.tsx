import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

export enum Size {
  Small = 'Small',
  Normal = 'Normal',
  Large = 'Large',
}

export interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  placeholder?: string
  prefix?: ReactNode
  suffix?: ReactNode
  size?: Size
  className?: string
  error?: boolean
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, prefix, suffix, className, size = Size.Normal, error, ...props }, ref) => (
    <div className={classNames({ relative: prefix || suffix })}>
      {prefix && <div className="absolute top-0 bottom-0 flex items-center left-3">{prefix}</div>}
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={classNames(
          'w-full',
          'border',
          size === Size.Normal && ['h-12', 'rounded-md', 'px-4'],
          size === Size.Small && ['h-8', 'w-26', 'rounded-md', 'px-4'],
          size === Size.Large && ['h-14', 'px-6', 'rounded-md'],
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
