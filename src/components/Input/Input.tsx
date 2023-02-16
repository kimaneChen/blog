import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

export enum Size {
  Small = 'small',
  Normal = 'Normal',
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
    <div className={classNames({ relative: suffix })}>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={classNames(
          'w-full',
          'h-12',
          'px-4',
          'border',
          'rounded-md',
          size === Size.Normal && ['h-12', 'rounded-md', 'px-4'],
          size === Size.Small && ['h-8', 'w-26', 'rounded-md', 'px-4'],
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
