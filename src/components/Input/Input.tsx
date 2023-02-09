import classNames from 'classnames'
import { forwardRef, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
  suffix?: JSX.Element
  className?: string
}

const Input = forwardRef<HTMLInputElement, Props>(({ placeholder, suffix, ...props }, ref) => (
  <div className={classNames({ relative: suffix })}>
    <input
      ref={ref}
      type="text"
      placeholder={placeholder}
      className="w-full h-12 px-4 border rounded-md"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
    {suffix && <div className="absolute top-0 bottom-0 flex items-center right-3">{suffix}</div>}
  </div>
))

Input.displayName = 'Input'
export default Input
