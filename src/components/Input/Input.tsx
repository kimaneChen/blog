import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

export interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  placeholder?: string
  prefix?: ReactNode
  suffix?: ReactNode
  className?: string
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, prefix, suffix, className, ...props }, ref) => (
    <div className={classNames({ relative: prefix || suffix })}>
      {prefix && <div className="absolute top-0 bottom-0 flex items-center left-3">{prefix}</div>}
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={classNames(
          ['w-full', 'h-12', 'px-4', 'border', 'rounded-md'],
          prefix && 'pl-9',
          suffix && 'pr-9',
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
